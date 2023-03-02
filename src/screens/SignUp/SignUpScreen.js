import React, {useRef} from "react";
import './SignUpScreen.css';
import {appAuth} from "../../firebase";

const SignUpScreen = () => {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        appAuth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
            .then((auth) => {
                console.log(auth)
            }).catch((error) => {
            alert(error.message)
        })
    }

    const signIn = (e) => {
        e.preventDefault();
        appAuth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
            .then(auth => {
                console.log(auth);
            }).catch(error => {
            alert(error.message)
        })
    }

    return (
        <div className='signupScreen'>
            <form>
                <h1>SignIn</h1>
                <input ref={emailRef} type='email' placeholder='Email'/>
                <input ref={passwordRef} type='password' placeholder='Password'/>
                <button onClick={signIn}>SignIn</button>
                <h4>
                    <span className='signupScreen__gray'>New to Netflix? </span>
                    <span className='signupScreen__link' onClick={register}>Sign Up now.</span>

                </h4>
            </form>
        </div>
    )
}

export default SignUpScreen;