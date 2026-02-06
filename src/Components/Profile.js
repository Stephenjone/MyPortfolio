import React from 'react';
import './Profile.css';

function Profile() {
    return (
        <div id="profile">
            <h2 className="profile-h2">Profile</h2>
            <div className="profile-section">
                <p className="profile-text">
                    I am a Graphic Designer and UI Developer dedicated to crafting seamless digital experiences. By combining a deep understanding of visual hierarchy with clean, scalable code, I transform complex ideas into intuitive, pixel-perfect interfaces. I don’t just design the vision; I build the reality.
                </p>

                <div className="photo-info">
                <img
                    src="/profileImg.jpg"
                    alt="profile"
                    className="img-fluid profile-img"
                />
            </div>
            </div>

            
        </div>
    );
}

export default Profile;
