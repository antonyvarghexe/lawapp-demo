import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/img/logo.svg';

const Header = () => {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // --- ADDED: useEffect to handle window resizing ---
  useEffect(() => {
    const handleResize = () => {
      const mainWrapper = document.getElementById('main-wrapper');
      
      if (window.innerWidth < 768) {
        setIsHamburgerActive(true);
        if (mainWrapper && !mainWrapper.classList.contains('menu-toggle')) {
          mainWrapper.classList.add('menu-toggle');
        }
      } else {
        setIsHamburgerActive(false);
        if (mainWrapper && mainWrapper.classList.contains('menu-toggle')) {
          mainWrapper.classList.remove('menu-toggle');
        }
      }
    };

    // Run once on component mount to check initial screen size
    handleResize();

    // Add event listener for screen resizing
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  // ---------------------------------------------------

  const handleMenuToggle = () => {
    setIsHamburgerActive(!isHamburgerActive);
    const mainWrapper = document.getElementById('main-wrapper');
    
    if (mainWrapper) {
      mainWrapper.classList.toggle('menu-toggle');
    } else {
      console.error("ERROR: Could not find an element with id='main-wrapper'");
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsNotificationOpen(false);
    setIsProfileOpen(false);
  };

  const toggleNotifications = (e) => {
    e.preventDefault();
    setIsNotificationOpen(!isNotificationOpen);
    setIsSearchOpen(false);
    setIsProfileOpen(false);
  };

  const toggleProfile = (e) => {
    e.preventDefault();
    setIsProfileOpen(!isProfileOpen);
    setIsSearchOpen(false);
    setIsNotificationOpen(false);
  };

  // Helper function to close dropdowns after an item is clicked
  const closeDropdowns = () => {
    setIsSearchOpen(false);
    setIsNotificationOpen(false);
    setIsProfileOpen(false);
  };

  return (
    <>
      <div className="nav-header">
        <a href="/" className="brand-logo">
          <img className="logo-abbr" src={logoImg} alt="Logo" />
        </a>

        <div className="nav-control" onClick={handleMenuToggle} style={{ cursor: 'pointer' }}>
          <div className={`hamburger ${isHamburgerActive ? 'is-active' : ''}`}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </div>

      <div className="header"> 
        <div className="header-content">
          <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-between">
              <div className="header-left">
                <div className="search_bar dropdown position-relative">
                  <span className="search_icon p-3 c-pointer" onClick={toggleSearch}>
                    <i className="mdi mdi-magnify"></i>
                  </span>
                  <div className={`dropdown-menu p-0 m-0 ${isSearchOpen ? 'show' : ''}`}>
                    <form>
                      <input
                        className="form-control"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </form>
                  </div>
                </div>
              </div>

              <ul className="navbar-nav header-right">
                
                <li className="nav-item dropdown notification_dropdown position-relative">
                  <a className="nav-link" href="#!" role="button" onClick={toggleNotifications}>
                    <i className="mdi mdi-bell"></i>
                    <div className="pulse-css"></div>
                  </a>
                  
                  {/* MAGIC FIX: transform: 'none' disables the template's broken positioning */}
                  <div 
                    className={`dropdown-menu dropdown-notification dropdown-menu-end ${isNotificationOpen ? 'show' : ''}`}
                    style={{ 
                      position: 'absolute', 
                      right: 0, 
                      left: 'auto', 
                      top: '100%',
                      transform: 'none' 
                    }}
                  >
                    <ul className="list-unstyled">
                      <li className="media dropdown-item">
                        <span className="dd-icon bg-success bg-opacity-25 text-success">
                          <i className="ti-user"></i>
                        </span>
                        <div className="media-body">
                          <a href="#!" onClick={closeDropdowns}>
                            <p>
                              <strong>Martin</strong> has added a <strong>customer</strong>{' '}
                              Successfully
                            </p>
                          </a>
                        </div>
                        <span className="notify-time">3:20 am</span>
                      </li>
                      <li className="media dropdown-item">
                        <span className="dd-icon bg-primary bg-opacity-25 text-primary">
                          <i className="ti-shopping-cart"></i>
                        </span>
                        <div className="media-body">
                          <a href="#!" onClick={closeDropdowns}>
                            <p>
                              <strong>Jennifer</strong> purchased Light Dashboard 2.0.
                            </p>
                          </a>
                        </div>
                        <span className="notify-time">3:20 am</span>
                      </li>
                      <li className="media dropdown-item">
                        <span className="dd-icon bg-danger bg-opacity-25">
                          <i className="ti-bookmark"></i>
                        </span>
                        <div className="media-body">
                          <a href="#!" onClick={closeDropdowns}>
                            <p>
                              <strong>Robin</strong> marked a <strong>ticket</strong> as unsolved.
                            </p>
                          </a>
                        </div>
                        <span className="notify-time">3:20 am</span>
                      </li>
                    </ul>
                    <a className="all-notification" href="#!" onClick={closeDropdowns}>
                      See all notifications <i className="ti-arrow-right"></i>
                    </a>
                  </div>
                </li>
                
                <li className="nav-item dropdown header-profile position-relative">
                  <a className="nav-link" href="#!" role="button" onClick={toggleProfile}>
                    <i className="mdi mdi-account"></i>
                  </a>
                  
                  {/* MAGIC FIX: transform: 'none' disables the template's broken positioning */}
                  <div 
                    className={`dropdown-menu dropdown-profile dropdown-menu-end ${isProfileOpen ? 'show' : ''}`}
                    style={{ 
                      position: 'absolute', 
                      right: 0, 
                      left: 'auto', 
                      top: '100%',
                      transform: 'none' 
                    }}
                  >
                    {/* Updated to use Link for client-side routing */}
                    <Link to="/profile/1" className="dropdown-item" onClick={closeDropdowns}>
                      <i className="icon-user"></i>
                      <span className="ml-2">Profile </span>
                    </Link>
                      
                    <Link to="/login" className="dropdown-item" onClick={closeDropdowns}>
                      <i className="icon-key"></i>
                      <span className="ml-2">Logout </span>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;