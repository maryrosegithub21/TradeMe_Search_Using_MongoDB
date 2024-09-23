import React from 'react';
import './FooterMobile.css';

const FooterMobile = () => {
    return (
        <div className="footer-frame">
            <div className="mobile-footer-red-block"></div>
            <div className="footer-links">
                <div className="footer-link">Desktop Site</div>
                <div className="footer-link">Help & Contact Us</div>
                <div className="footer-link">Terms & Conditions</div>
            </div>
            <div className="footer-bottom">
                <div className="footer-trademark">2024 Trade Me Limited</div>
                <div className="social-icons">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        aria-label="Facebook"
                    >
                        <path d="M9.04598 5.865V8.613H7.03198V11.973H9.04598V21.959H13.18V11.974H15.955C15.955 11.974 16.215 10.363 16.341 8.601H13.197V6.303C13.197 5.96 13.647 5.498 14.093 5.498H16.347V2H13.283C8.94298 2 9.04598 5.363 9.04598 5.865Z" fill="#666666"/>
                    </svg>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        aria-label="Twitter"
                    >
                        <path d="M22 5.90716C21.2504 6.23454 20.4565 6.4492 19.644 6.54416C20.4968 6.0434 21.138 5.24927 21.448 4.31016C20.64 4.78049 19.7587 5.11177 18.841 5.29016C18.4545 4.88537 17.9897 4.56355 17.4748 4.34434C16.9598 4.12513 16.4056 4.01313 15.846 4.01516C13.58 4.01516 11.743 5.82516 11.743 8.05516C11.743 8.37116 11.779 8.68016 11.849 8.97516C10.2236 8.89786 8.63212 8.48257 7.17617 7.7558C5.72022 7.02903 4.43176 6.00674 3.393 4.75416C3.02883 5.36857 2.83742 6.06994 2.839 6.78416C2.8397 7.45213 3.00683 8.10939 3.32529 8.69656C3.64375 9.28372 4.1035 9.78228 4.663 10.1472C4.01248 10.1262 3.37602 9.95249 2.805 9.64016V9.69016C2.805 11.6482 4.22 13.2812 6.095 13.6532C5.74261 13.7467 5.37958 13.7941 5.015 13.7942C4.75 13.7942 4.493 13.7692 4.242 13.7192C4.51008 14.5271 5.02311 15.2315 5.70982 15.7345C6.39653 16.2375 7.22284 16.5142 8.074 16.5262C6.61407 17.6507 4.82182 18.2582 2.979 18.2532C2.647 18.2532 2.321 18.2332 2 18.1972C3.88125 19.3879 6.06259 20.0184 8.289 20.0152C15.836 20.0152 19.962 13.8582 19.962 8.51916L19.948 7.99616C20.7529 7.42983 21.4481 6.72201 22 5.90716Z" fill="#666666"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default FooterMobile;
