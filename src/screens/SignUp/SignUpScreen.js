import React from "react";
import './SignUpScreen.css';

const SignUpScreen = () => {

    const register = (e) => {
        e.preventDefault();
    }

    const signIn = (e) => {
        e.preventDefault();
    }

    return (
        <div className='signupScreen'>
            <form>
                <h1>SignIn</h1>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='Password'/>
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