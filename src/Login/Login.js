import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <div>
  <div id="info">
    <h2>CSS Only Slide Login/Registration</h2>
    <br />
    Click the "Sign Up" button to view the registration form.
    <br />
    <br />
    <p id="credit">Based on a Dribbble by SELECTO</p>
  </div>
  <div id="container">
    {/* Cover Box */}
    <div id="cover">
      {/* Sign Up Section */}
      <h1 className="sign-up">Hello, Friend!</h1>
      <p className="sign-up">
        Enter your personal details
        <br /> and start a journey with us
      </p>
      <a className="button sign-up" href="#cover">
        Sign Up
      </a>
      {/* Sign In Section */}
      <h1 className="sign-in">Welcome Back!</h1>
      <p className="sign-in">
        To keep connected with us please
        <br /> login with your personal info
      </p>
      <br />
      <a className="button sub sign-in" href="#">
        Sign In
      </a>
    </div>
    {/* Login Box */}
    <div id="login">
      <h1>Sign In</h1>
      <a href="#">
        <img
          className="social-login"
          src="https://image.flaticon.com/icons/png/128/59/59439.png"
        />
      </a>
      <a href="#">
        <img
          className="social-login"
          src="https://image.flaticon.com/icons/png/128/49/49026.png"
        />
      </a>
      <a href="#">
        <img
          className="social-login"
          src="https://image.flaticon.com/icons/png/128/34/34227.png"
        />
      </a>
      <p>or use your email account:</p>
      <form>
        <input type="email" placeholder="Email" autoComplete="off" />
        <br />
        <input type="password" placeholder="Password" autoComplete="off" />
        <br />
        <a id="forgot-pass" href="#">
          Forgot your password?
        </a>
        <br />
        <input className="submit-btn" type="submit" defaultValue="Sign In" />
      </form>
    </div>
    {/* Register Box */}
    <div id="register">
      <h1>Create Account</h1>
      <a href="#">
        <img
          className="social-login"
          src="https://image.flaticon.com/icons/png/128/59/59439.png"
        />
      </a>
      <a href="#">
        <img
          className="social-login"
          src="https://image.flaticon.com/icons/png/128/49/49026.png"
        />
      </a>
      <a href="#">
        <img
          className="social-login"
          src="https://image.flaticon.com/icons/png/128/34/34227.png"
        />
      </a>
      <p>or use your email for registration:</p>
      <form>
        <input type="text" placeholder="Name" autoComplete="off" />
        <br />
        <input type="email" placeholder="Email" autoComplete="off" />
        <br />
        <input type="password" placeholder="Password" autoComplete="off" />
        <br />
        <input className="submit-btn" type="submit" defaultValue="Sign Up" />
      </form>
    </div>
  </div>{" "}
  {/* END Container */}
</div>

  )
}
