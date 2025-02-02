// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={sidebarStyle}>
      <ul style={sidebarListStyle}>
        <li style={sidebarItemStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li style={sidebarItemStyle}>
          <Link to="/admin" style={linkStyle}>Admin Dashboard</Link>
        </li>
        <li style={sidebarItemStyle}>
          <Link to="/school" style={linkStyle}>School Dashboard</Link>
        </li>
        <li style={sidebarItemStyle}>
          <Link to="/parent" style={linkStyle}>Parent Dashboard</Link>
        </li>
        <li style={sidebarItemStyle}>
          <Link to="/student" style={linkStyle}>Student Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

const sidebarStyle = {
  height: '100vh',
  width: '200px',
  backgroundColor: '#333',
  paddingTop: '20px',
  position: 'fixed',
};

const sidebarListStyle = {
  listStyleType: 'none',
  padding: 0,
};

const sidebarItemStyle = {
  margin: '20px 0',
  paddingLeft: '20px',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '18px',
};

export default Sidebar;
