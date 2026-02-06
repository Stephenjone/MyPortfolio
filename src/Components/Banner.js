import React from 'react';
import './Banner.css';

function Banner() {
    return (
        <section className="banner d-flex align-items-center justify-content-center text-center">
            <div>
                <h1 className="banner-title">
                    <span className="highlight">Design</span>
                    <span className="muted"> That Speaks.</span>
                    <br />
                    <span className="highlight">Interfaces</span>
                    <span className="muted"> That Perform.</span>
                </h1>

                <div className="divider"></div>

                <p className="banner-subtitle">
                    Crafting modern Design experiences with clarity and impact.
                </p>
            </div>
        </section>
    );
}

export default Banner;
