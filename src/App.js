import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import './App.css';
import HomeScreen from "./screens/Home/HomeScreen";
import WebFont from 'webfontloader';
import LoginScreen from "./screens/Login/LoginScreen";
import {appAuth} from "./firebase";
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from "./features/userSlice";
import ProfileScreen from "./screens/Profile/ProfileScreen";

function App() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();

    console.log('user', user)
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
                dispatch(login({
                    userId: userAuth.uid,
                    userEmail: userAuth.email,
                }))

            } else {
                // Logged out
                dispatch(logout)
            }
        })
        return () => unsubscribe();
    }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={user ? <Navigate to='/'/> : <LoginScreen/>}/>
                    <Route path='/profile' element={<ProfileScreen />}/>
                    <Route path='/' element={!user ? <Navigate to='login'/> : <HomeScreen/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
