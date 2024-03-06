import {Component} from 'react'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {activeId: 'ALL', list: [], isFailure: false}

  getData = async () => {
    const {activeId} = this.state
    console.log(activeId)
    const url = `https://apis.ccbp.in/popular-repos?language=${activeId}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    const updatedData = data.popular_repos.map(each => ({
      name: each.name,
      avatarUrl: each.avatar_url,
      forksCount: each.forks_count,
      issuesCount: each.issues_count,
      starsCount: each.stars_count,
    }))

    if (response.ok === true) {
      return this.setState({list: updatedData})
    }
    return this.setState({isFailure: true})
  }

  failure = () => {}

  userClick = id => {
    this.setState({activeId: id}, this.getData)
  }

  render() {
    const {list, isFailure} = this.state

    return (
      <div>
        <h1>popular</h1>
        <ul>
          {languageFiltersData.map(each => {
            return (
              <LanguageFilterItem
                key={each.id}
                details={each}
                userClick={this.userClick}
              />
            )
          })}
        </ul>
        {isFailure && (
          <img
            src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
            alt="failure view"
          />
        )}
        <div>
          {list.map(each => {
            return <RepositoryItem key={each.id} details={each} />
          })}
        </div>
      </div>
    )
  }
}
export default GithubPopularRepos
