import React from 'react';
import "./PickNPay.css";

function Library() {
    return (
        <div className="picknpay-container">
            <h2 className="picknpay-title">Library</h2>
            
            <div className="video-wrapper">
                <video 
                    width="100%" 
                    height="auto" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                >
                    <source src="/Assets/UI-Design/Library.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default Library;