import React from 'react';
import './login.css'; // Import the CSS file for styling

function Login({ setshowLogin }) {
    const handlereturn = () => {
        setshowLogin(false)
    }
  return (
    <div className='login'>
        <div className="login-container">
            <h2>Login to Your Account</h2>
            <form className='login-form'>
                <label htmlFor="email"><i className='bx bxs-envelope'></i> Email:</label>
                <input type="email" id="email" name="email" placeholder='Enter email' required />

                <label htmlFor="password"><i className='bx bx-user-pin'></i> Password:</label>
                <input type="password" id="password" name="password" placeholder='Enter password' required />

                <button type="submit">Login</button>
                <br/>
                <button type="button" className="cancel-button"  onClick={handlereturn}>cancel</button>
            </form>
            <p>Don't have an account? <a href="https://victoralexug.github.io/victoralexug/">Sign up</a></p>
        </div>
    </div>
  );
}

export default Login;