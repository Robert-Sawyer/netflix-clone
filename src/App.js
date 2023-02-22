import React, {useEffect} from 'react';
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
            <HomeScreen/>
        </div>
    );
}

export default App;
