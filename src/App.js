import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import HomeScreen from "./screens/Home/HomeScreen";
import WebFont from 'webfontloader';
import LoginScreen from "./screens/Login/LoginScreen";
import {appAuth} from "./firebase";

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Helvetica Neue']
            }
        });
    }, []);

    useEffect(() => {
        const unsubscribe = appAuth.onAuthStateChanged(userAuth => {
            if (userAuth) {
                // Logged in
                console.log(userAuth);
            } else {
                // Logged out
            }
        })
        return () => unsubscribe();
    }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<HomeScreen/>}/>
                    <Route path='/login' element={<LoginScreen/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
