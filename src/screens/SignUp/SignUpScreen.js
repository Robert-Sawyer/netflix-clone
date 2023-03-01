import React from "react";
import './SignUpScreen.css';

const SignUpScreen = () => {

    return (
        <div className='signupScreen'>
            <form>
                <h1>SignIn</h1>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='Password'/>
                <button>SignIn</button>
            </form>
        </div>
    )
}

export default SignUpScreen;