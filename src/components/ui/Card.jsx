import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import SideMenu from '../components/layout/SideMenu';
import Footer from '../components/layout/Footer';

const MainLayout = () => {
  return (
    <div id="main-wrapper" className="show">
      {/* Note: You might need to add/manage classes like 'show' or 'menu-toggle' 
        on #main-wrapper depending on how the template's JS handles sidebar toggling.
      */}
      
      {/* 1. Top Navbar */}
      <Header />

      {/* 2. Left Sidebar */}
      <SideMenu />

      {/* 3. Main Content Area */}
      <div className="content-body">
        {/* <Outlet /> is where your specific page content (like Dashboard) will render */}
        <Outlet /> 
      </div>

      {/* 4. Bottom Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;