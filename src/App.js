import './App.css'
import logo from './logos/logo_wobot-ai.svg'
import formLogo from './logos/logo_form-2.svg'

function App() {
  return (
    <div className="app">
      <div className="header">
        <img src={logo} id="logo-wobot" alt="wobot logo"></img>
      </div>
      <div className="sign-up-card">
        <div className="sign-up-form">
          <div className="form-content">
            <div className="form-header">
              <div className="form-header-data">
                <img src={formLogo} id="logo-form" alt="form logo"></img>
                <h1>
                  It's a delight to have <br></br>you onboard
                </h1>
                <p>Help us know you better</p>
                <p>
                  ( This is how we optimize Wobot as per your business needs )
                </p>
              </div>
            </div>
            <div className="form-body">
              <div>
                <h3 className="input-label">Your name</h3>
                <input
                  id="your-name"
                  className="inputs"
                  type="text"
                  placeholder="e.g. John Smith"
                ></input>
              </div>
              <div>
                <h3 className="input-label">Company name</h3>
                <input
                  id="company-name"
                  className="inputs"
                  type="text"
                  placeholder="e.g. Alpha Inc."
                ></input>
              </div>
              <div>
                <h3 className="input-label">Industry</h3>
                <select className="inputs">
                  <option value="primary">Primary</option>
                  <option value="secondary">Secondary</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <h3 className="input-label">Number of locations</h3>
              <div className="input-locations-btns">
                <button className="input-locations-btn">1-20</button>
                <button className="input-locations-btn">21-50</button>
                <button className="input-locations-btn">51-200</button>
                <button className="input-locations-btn">201-500</button>
                <button className="input-locations-btn">500+</button>
              </div>
              <button type="submit" className="submit-btn">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-links">
          <a href="">Terms Of Use </a>&nbsp; | &nbsp;
          <a href="">Privacy Policy</a>
        </div>
      </div>
    </div>
  )
}

export default App
