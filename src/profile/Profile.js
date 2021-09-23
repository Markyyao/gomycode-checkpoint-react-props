import React from 'react';
import  "./profile.css";
import Image from "./img.jpg"

const Profile = props => {
    const info = ()=>{
        alert(`felicitation ${fullName} vous avez valider`)
    }
    const {fullName, bio, profession}=props
        return (
            <div>
                <div className = "card">
                    <div className = "image">
                        <img src={Image} alt="ordinateur" />
                    </div>
                    <div className = "donnees">
                        <div className="donnees--child">
                            <h1>{fullName}</h1>
                            <p>{bio}</p>
                            <p>{profession}</p>
                            <button onClick = {info}>Alert</button>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Profile;