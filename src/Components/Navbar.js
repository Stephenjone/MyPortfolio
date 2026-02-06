import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const links = {
        Home: "#",
        Profile: "#profile",
        Skills: "#skills-container",
        Projects: "#projects-section",
        Contact: "#",
        Resume: "/STEPHEN S DHARMDAS.pdf",
        LinkedIn: "https://www.linkedin.com/in/stephen-dharmdas-6aa8b483/" 
    };

    const [open, setOpen] = useState(false);

    const handleToggle = () => setOpen(prev => !prev);

    const handleLinkClick = () => {
        // close mobile menu after navigation
        if (open) setOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">
            <div className="container justify-content-center">
                {/* Hamburger for mobile */}
                <button
                    className={`hamburger ${open ? 'open' : ''}`}
                    aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={open}
                    aria-controls="mobile-nav"
                    onClick={handleToggle}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div id="mobile-nav" className={`navbar-nav gap-5 py-3 fs-6 ${open ? 'open' : ''}`}>
                    {Object.keys(links).map(item => (
                        <a 
                            key={item} 
                            className="nav-link custom-link" 
                            href={links[item]} 
                            target={item === "LinkedIn" || item === "Resume" ? "_blank" : "_self"}
                            rel={item === "LinkedIn" || item === "Resume" ? "noopener noreferrer" : ""}
                            onClick={handleLinkClick}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
