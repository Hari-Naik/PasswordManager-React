import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'
import SavedPasswords from '../SavedPasswords'

import './index.css'

class AddPasswords extends Component {
  state = {
    passwordsList: [],
    website: '',
    username: '',
    password: '',
    searchInput: '',
    showPassword: false,
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onClickDeletePassword = id => {
    const {passwordsList} = this.state

    const updatePasswordList = passwordsList.filter(
      eachList => eachList.id !== id,
    )
    this.setState({passwordsList: updatePasswordList})
  }

  //   renderPasswordsList = searchResults => {
  //     const {showPassword} = this.state
  //     return (
  //       <ul className="passwords-list-container">
  //         {searchResults.map(eachlist => (
  //           <SavedPasswords
  //             eachlist={eachlist}
  //             key={eachlist.id}
  //             showPassword={showPassword}
  //             onClickDeletePassword={this.onClickDeletePassword}
  //           />
  //         ))}
  //       </ul>
  //     )
  //   }

  renderImage = () => (
    <div className="no-passwords-img-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="password-manager-img"
      />
      <p>No Passwords</p>
    </div>
  )

  onClickSubmit = e => {
    e.preventDefault()
    const {website, username, password} = this.state

    const newPassword = {
      id: uuidv4(),
      website,
      username,
      password,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
    }))
  }

  onChangeWebsite = e => {
    this.setState({website: e.target.value})
  }

  onChangeUsername = e => {
    this.setState({username: e.target.value})
  }

  onChangePassword = e => {
    this.setState({password: e.target.value})
  }

  getSearchResults = e => {
    this.setState({searchInput: e.target.value})
  }

  render() {
    const {
      passwordsList,
      website,
      username,
      password,
      searchInput,
      showPassword,
    } = this.state

    const searchResults = passwordsList.filter(eachList =>
      eachList.website.includes(searchInput),
    )

    return (
      <>
        <div className="add-passwords-container">
          <form onSubmit={this.onClickSubmit}>
            <h1 className="heading">Add New Password</h1>
            <div className="input-container">
              <div className="icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="icon"
                />
              </div>
              <input
                type="text"
                placeholder="Enter Website"
                value={website}
                onChange={this.onChangeWebsite}
              />
            </div>
            <div className="input-container">
              <div className="icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="icon"
                />
              </div>
              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="input-container">
              <div className="icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="icon"
                />
              </div>
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={this.onChangePassword}
              />
            </div>
            <button type="submit">Add</button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-img"
          />
        </div>
        <div className="saved-passwords-container">
          <div className="count-search-container">
            <div className="passwords-count-container">
              <h3>Your Passwords</h3>
              <p>{searchResults.length}</p>
            </div>
            <div className="input-container">
              <div className="icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="icon"
                />
              </div>
              <input
                type="search"
                placeholder="Search"
                value={searchInput}
                onChange={this.getSearchResults}
              />
            </div>
          </div>
          <hr className="hr-line" />
          <div className="show-passwords-container">
            <input
              type="checkbox"
              id="checkbox"
              value="checkbox"
              onClick={this.onClickShowPassword}
            />
            <label htmlFor="checkbox">Show passwords</label>
          </div>
          {searchResults.length === 0 ? (
            this.renderImage()
          ) : (
            <ul className="passwords-list-container">
              {searchResults.map(eachlist => (
                <SavedPasswords
                  eachlist={eachlist}
                  key={eachlist.id}
                  showPassword={showPassword}
                  onClickDeletePassword={this.onClickDeletePassword}
                />
              ))}
            </ul>
          )}
        </div>
      </>
    )
  }
}

export default AddPasswords
