import React from 'react';
import './Footer.css';

function Footer(){
    return(
        <footer className="footer-section" role="contentinfo">
            <div className="footer-inner">
            <div className="footer-bottom">© {new Date().getFullYear()} Stephen S Dharmdas. All rights reserved.
                <a className="footer-link" href="mailto:jones.stephen196@gmail.com">jones.stephen196@gmail.com</a>
                <a className="footer-link" href="tel:+918495978160">+91 8495978160</a>
            </div>
            </div>
        </footer>
    )
}

export default Footer;