import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div id="main-wrapper" className="show">
      <Header />
      <Sidebar />
      <div className="content-body">
        <div className="container-fluid">
          {/* This is where the Home/Dashboard content will appear */}
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;