// Write your code here
const LanguageFilterItem = props => {
  const {details, userClick} = props
  const {id, language} = details
  const onclick = () => {
    userClick(id)
  }
  return (
    <li>
      <p onClick={onclick}>{language}</p>
    </li>
  )
}
export default LanguageFilterItem
