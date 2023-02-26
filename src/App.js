import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import HomeScreen from "./components/HomeScreen/HomeScreen";
import WebFont from 'webfontloader';

function App() {

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Helvetica Neue']
            }
        });
    }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomeScreen/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
