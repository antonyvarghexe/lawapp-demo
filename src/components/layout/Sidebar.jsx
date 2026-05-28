import React from 'react';
import { Link } from 'react-router-dom';  

const Sidebar = () => {
  const handleLinkClick = () => {
    if (document.activeElement) {
      
      document.activeElement.blur();
    }
  };
  return (
    <div className="quixnav">
      <div className="quixnav-scroll">
        <ul className="metismenu" id="menu">
          <li onClick={handleLinkClick}>
            {/* 2. Change 'a href' to 'Link to' */}
            <Link to="/" aria-expanded="false">
              <i className="mdi mdi-view-dashboard"></i>
              <span className="nav-text">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/clients" aria-expanded="false">
              <i className="mdi mdi-account-multiple"></i>
              <span className="nav-text">Clients</span>
            </Link>
          </li>
          <li>
            <Link to="/cases" aria-expanded="false">
              <i className="mdi mdi-scale-balance"></i>
              <span className="nav-text">Cases</span>
            </Link>
          </li>
          <li>
            <Link to="/hearings" aria-expanded="false">
              <i className="mdi mdi-calendar-clock"></i>
              <span className="nav-text">Hearings & Dates</span>
            </Link>
          </li>
          <li>
            <Link to="/documents" aria-expanded="false">
              <i className="mdi mdi-folder-multiple-outline"></i>
              <span className="nav-text">Documents</span>
            </Link>
          </li>

          {/* Feature 6: Lawyer Network */}
          <li>
            <Link to="/network" aria-expanded="false">
              <i className="mdi mdi-account-network"></i>
              <span className="nav-text">Lawyer Network</span>
            </Link>
          </li>

          {/* Settings Menu Item */}
          <li className="sidebar-settings">
            <Link to="/settings" aria-expanded="false">
              <i className="mdi mdi-settings"></i>
              <span className="nav-text">Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;