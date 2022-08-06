import AddPasswords from './components/AddPasswords'
import './App.css'

const App = () => (
  <div className="bg-container">
    <div className="password-manager-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />
        <AddPasswords />
      </div>
    </div>
  </div>
)

export default App
