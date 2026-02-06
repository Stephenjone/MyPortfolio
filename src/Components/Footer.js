import React from 'react';
import './Footer.css';

function Footer(){
    return(
        <footer className="footer-section" role="contentinfo">
            <div className="footer-inner">
                <div className="footer-contact">
                    <a className="footer-link" href="mailto:jones.stephen196@gmail.com">jones.stephen196@gmail.com</a>
                    <a className="footer-link" href="tel:+918495978160">+91 8495978160</a>
                </div>

                <div className="footer-social">
                    <a className="social-link" href="https://www.linkedin.com/in/stephen-dharmdas-6aa8b483/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        {/* Simple inline LinkedIn SVG */}
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <rect width="24" height="24" rx="2" fill="#0A66C2" />
                            <path d="M6.94 9.5H4.5V19H6.94V9.5ZM5.72 8.3C6.48 8.3 7.06 7.72 7.06 6.96C7.06 6.2 6.48 5.62 5.72 5.62C4.96 5.62 4.38 6.2 4.38 6.96C4.38 7.72 4.96 8.3 5.72 8.3ZM20 19H17.56V13.08C17.56 11.6 17.53 9.74 15.64 9.74C13.73 9.74 13.42 11.3 13.42 13V19H11V9.5H13.25V10.56H13.29C13.62 10 14.52 9.3 15.9 9.3C18.9 9.3 20 11.06 20 13.64V19Z" fill="#fff" />
                        </svg>
                    </a>

                    <a className="resume-link" href="/STEPHEN S DHARMDAS.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                </div>
            </div>

            <div className="footer-bottom">© {new Date().getFullYear()} Stephen S Dharmdas. All rights reserved.</div>
        </footer>
    )
}

export default Footer;