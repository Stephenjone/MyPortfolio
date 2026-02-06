import React from 'react';
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

    return (
        <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">
            <div className="container justify-content-center">
                <div className="navbar-nav gap-5 py-3 fs-6">
                    {Object.keys(links).map(item => (
                        <a 
                            key={item} 
                            className="nav-link custom-link" 
                            href={links[item]} 
                            target={item === "LinkedIn" || item === "Resume" ? "_blank" : "_self"}
                            rel={item === "LinkedIn" || item === "Resume" ? "noopener noreferrer" : ""}
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
