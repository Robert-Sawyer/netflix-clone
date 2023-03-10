import React, {useState} from "react";
import './LoginScreen.css';
import SignUpScreen from "../SignUp/SignUpScreen";

const LoginScreen = () => {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className='loginScreen'>
            <div className='loginScreen__background'>
                <a href='/'>
                    <img
                        className='loginScreen__logo'
                        src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                        alt=''
                    />
                </a>

                <button onClick={() => setSignIn(true)} className='loginScreen__sign-in-button'>Sign In</button>
                <div className='loginScreen__gradient' />
            </div>
            <div className='loginScreen__body'>
                {signIn ? (
                    <SignUpScreen/>
                ) : (
                    <>
                        <h1>Unlimited films, TV programmes and more</h1>
                        <h2>Watch anywhere. Cancel at any time.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                        <div className='loginScreen__formContainer'>
                            <form>
                                <input type='email' placeholder='Email Address'/>
                                <button onClick={() => setSignIn(true)} className='loginScreen__submitButton'>GET STARTED</button>
                            </form>
                        </div>
                    </>
                )}

            </div>
        </div>
    )
}

export default LoginScreen;