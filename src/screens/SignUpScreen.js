import React,{useRef} from 'react'
import { auth } from '../firebase'
import "./SignupScreen.css"
function SignUpScreen() {
    const EmailRef = useRef(null)
    const PasswordRef = useRef(null)
    const signIn=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            EmailRef.current.value,
            PasswordRef.current.value,
        ).then((authUser)=>{
            console.log(authUser)
        }).catch((error)=>{alert(error.message)})
    }
    const register=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            EmailRef.current.value,
            PasswordRef.current.value,
        ).then((authUser)=>{
            console.log(authUser)
        }).catch((error)=>{alert(error.message)})
    }
    return (
        <div className="signupScreen">
            <form>
                <h1>SignIn</h1>
                
                <input ref={EmailRef} type="email" placeholder="Email" />
                <input ref={PasswordRef} type="password" placeholder="Pasword" />
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4><span className="textgrey">New to Netflix </span><span className="signup__link" onClick={register}> Sign Up Now </span></h4>
            </form>
        </div>
    )
}

export default SignUpScreen
