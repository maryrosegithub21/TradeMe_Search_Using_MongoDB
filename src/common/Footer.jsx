import React, { useState, useEffect } from 'react';
import FooterDesktop from './FooterDesktop';
import FooterMobile from './FooterMobile';

const Footer = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      const isCurrentlyDesktop = window.innerWidth >= 1024;
      if (isCurrentlyDesktop !== isDesktop) {
        setIsDesktop(isCurrentlyDesktop);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isDesktop]);

  return isDesktop ? <FooterDesktop /> : <FooterMobile />;
};

export default Footer;
