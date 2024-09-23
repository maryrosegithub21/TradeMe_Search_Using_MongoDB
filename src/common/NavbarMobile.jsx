import React from 'react';
import './NavbarMobile.css'; 
import logoSmall from '../assets/TradeMeImage.png'; 

const MobileNavbar = () => {
  return (
    <nav className="mobile-navbar">
      <div className="mobile-left-section">
        <div className="mobile-logo">
          <img src={logoSmall} alt="TradeMe Logo" />
          <div className="search-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20 19L16.1333 15.1333M18.2222 10.1111C18.2222 14.0385 15.0385 17.2222 11.1111 17.2222C7.18375 17.2222 4 14.0385 4 10.1111C4 6.18375 7.18375 3 11.1111 3C15.0385 3 18.2222 6.18375 18.2222 10.1111Z" stroke="#444444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <a href="#search" className="mobile-nav-item search">Search</a>
          </div>
        </div>
        <div className="mobile-browse-section">
          <div className="mobile-nav-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
          <path d="M21.3401 4.60987C20.8294 4.09888 20.2229 3.69352 19.5555 3.41696C18.888 3.14039 18.1726 2.99805 17.4501 2.99805C16.7276 2.99805 16.0122 3.14039 15.3448 3.41696C14.6773 3.69352 14.0709 4.09888 13.5601 4.60987L12.5001 5.66987L11.4401 4.60987C10.4084 3.57818 9.00915 2.99858 7.55012 2.99858C6.09109 2.99858 4.69181 3.57818 3.66012 4.60987C2.62843 5.64156 2.04883 7.04084 2.04883 8.49987C2.04883 9.95891 2.62843 11.3582 3.66012 12.3899L4.72012 13.4499L12.5001 21.2299L20.2801 13.4499L21.3401 12.3899C21.8511 11.8791 22.2565 11.2727 22.533 10.6052C22.8096 9.93777 22.9519 9.22236 22.9519 8.49987C22.9519 7.77738 22.8096 7.06198 22.533 6.39452C22.2565 5.72706 21.8511 5.12063 21.3401 4.60987V4.60987Z" stroke="#444444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
            <a href="#watchlist" className="mobile-nav-item">Watchlist</a>
          </div>
          <div className="mobile-nav-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
          <path d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z" stroke="#444444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M19.2504 18.7497C18.4502 17.9495 17.365 17.5 16.2334 17.5H8.76674C7.63515 17.5 6.54991 17.9495 5.74976 18.7497M16.7667 10.2667C16.7667 12.6231 14.8565 14.5333 12.5001 14.5333C10.1437 14.5333 8.23341 12.6231 8.23341 10.2667C8.23341 7.91025 10.1437 6 12.5001 6C14.8565 6 16.7667 7.91025 16.7667 10.2667Z" stroke="#444444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
            <a href="#profile" className="mobile-nav-item">My Trade Me</a>
          </div>
        </div>
      </div>
      <div className="mobile-red-block">
        <div className="mobile-left-red-section">
          <a href="#marketplace" className="mobile-red-text">Browse Marketplace</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          </svg>
          <a href="#listing" className="mobile-red-text">List an Item</a>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
