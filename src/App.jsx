import { useState } from 'react'

import './index.css';

function App() {

  const[theme , settheme] = useState('light');
  const [myLabel , setmyLabel] = useState('')
  const switchTheme = ()=>{
    if(theme === 'light'){
      settheme('dark');
      setmyLabel('Light Theme');
    }
    else{
      settheme('light');
      setmyLabel('Dark Theme');
    }
  }
 

  return (
 <div className="app"  data-theme = {theme}>
  <div className="login">
    <h1>Login</h1>
    <div className="container">
      <div className="top">
        <i class ='fab fa-google'></i>
        <i class ='fab fa-facebook-square'></i>
        <i class ='fab fa-linkedin'></i>
        <i class ='fab fa-twitter-square'></i>
        <i class ='fab fa-apple'></i>

      </div>
      <p className='divider'><span>Or</span></p>
      <form>
        <label>E-mail</label>
        <input type = 'email' placeholder='Enter your email'/>
        <label>Password</label>
        <input type = 'password' placeholder='Enter your password'/>
        <div className="remember">
          <input type="checkbox"  checked = 'checked'/>
          <p>Remember Me </p>
        </div>
        <button>Log In</button>
      </form>
      <div className="bottom">
        <p>Forget your password?</p>
        <a href = '/'>Reset Password</a>
      </div>
      <p className='create'>Create Account</p>
    </div>
    <div className="theme-toggle">
      <h2>{myLabel}</h2>
      <i  onClick={switchTheme}   class = 'fas fa-toggle-on'></i>
    </div>
  </div>
 </div>
  )
}

export default App
