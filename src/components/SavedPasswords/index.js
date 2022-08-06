import './index.css'

const SavedPasswords = props => {
  const {eachlist, onClickDeletePassword, showPassword} = props
  const {id, website, username, password} = eachlist

  const websiteProfile = website[0].toUpperCase()

  const passwordRes = showPassword ? (
    <p>{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars-img"
    />
  )
  const onDelete = () => {
    onClickDeletePassword(id)
  }

  return (
    <li className="password-item">
      <div className="website-profile-container">
        <p>{websiteProfile}</p>
      </div>
      <div className="password-content">
        <p>{website}</p>
        <p>{username}</p>
        {passwordRes}
      </div>
      <button
        type="button"
        testid="delete"
        className="delete-btn"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default SavedPasswords
