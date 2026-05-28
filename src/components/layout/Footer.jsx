import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
        <div className="copyright">
          <p>
            Copyright  © {currentYear}. 
            Developed by{' '}
            <a href="https://www.optimusalgorithms.com/" target="_blank" rel="noopener noreferrer">
              Optimus Algorithms
            </a>{' '}
            
          </p>
          
        </div>
      </footer>
    </>
  );
};

export default Footer;