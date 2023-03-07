import React, {useState} from "react";
import Nav from "../../components/HomeScreen/Nav";
import './ProfileScreen.css';
import {useSelector} from "react-redux";
import {selectUser} from "../../features/userSlice";
import {appAuth} from "../../firebase";
import PlanScreen from "../Plan/PlanScreen";

const ProfileScreen = () => {
    const [currentPlan, setCurrentPlan] = useState(null);
    const user = useSelector(selectUser);

    return (
        <div className='profileScreen'>
            <Nav/>
            <div className='profileScreen__body'>
                <h1>Edit profile</h1>
                <div className='profileScreen__info'>
                    <img
                         src='https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-squares-01/3/30-512.png'
                         alt=''
                    />
                    <div className='profileScreen__details'>
                        <h2>{user.userEmail}</h2>
                        <div className='profileScreen__plans'>
                            <h3>Plans (Current Plan: {currentPlan})</h3>
                            <PlanScreen setCurrentPlan={setCurrentPlan}/>
                            <button
                                onClick={() => appAuth.signOut()}
                                className='profileScreen__signOut'
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen;