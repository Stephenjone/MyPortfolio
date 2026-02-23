import React from 'react';
import './Profile.css';

function Profile() {
    return (
        <div id="profile">
            <h2 className="profile-h2">Profile</h2>
            <div className="profile-section">
                <p className="profile-text">
I am a Graphic Designer with 8 years of professional experience in visual communication, branding, and digital design. I specialise in developing creative concepts and producing brand identities, marketing materials, packaging designs, and digital assets aligned with client briefs and brand strategy. I am proficient in Adobe Photoshop, Illustrator, InDesign, and Figma, creating visual layouts, UI mock-ups, wireframes, and prototypes for web and mobile platforms, ensuring strong visual hierarchy, usability, and brand consistency.                </p>

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
