// Write your code here
import {Component} from 'react'

class RepositoryItem extends Component {
  render() {
    const {details} = this.props
    console.log(details)
    
    const {name, avatarUrl, forksCount, issuesCount, starsCount} = details
    return (
      <div>
        <img src={avatarUrl} alt={name} />
        <p>{name}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        <p>{starsCount}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
        />
        <p>{forksCount}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
        />
        <p>{issuesCount}</p>
      </div>
    )
  }
}
export default RepositoryItem
