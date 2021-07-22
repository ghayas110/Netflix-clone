import React from 'react'
import "./SignupScreen.css"
function SignUpScreen() {
    return (
        <div className="signupScreen">
            <form>
                <h1>SignIn</h1>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Pasword" />
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}

export default SignUpScreen
