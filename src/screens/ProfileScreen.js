import React from 'react'
import Nav from '../Nav'
import "./ProfileScreen.css"
import avatar from '../download.png';
import { useSelector } from 'react-redux';

import userSlice from "../features/userSlice"
import { auth } from '../firebase';
function ProfileScreen() {
    const user = useSelector(state  => userSlice)
    return (
        <div className="ProfileScreen">
            <Nav/>
            <div className="profile__body">
                <h1>Edit Profile</h1>

           
            <div className="profile_info">
                <img src={avatar} alt="avatar" />

            
            <div className="profile__details">
               <h2>ghayas110@gmail.com{user.email}</h2> 


            
            <div className="profile__plans">
                <button onClick={()=>auth.signOut()} className="profile__signout">Sign out</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ProfileScreen
