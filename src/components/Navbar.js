import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false); // Assuming loggedIn is false initially
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    setLoggedIn(false);
    // Add logic to log out (e.g., clear session, redirect)
  };

  const handleLogin = () => {
    navigate('/login'); // Navigate to the login page
  };

  const handleSignUp = () => {
    navigate('/SignUp'); // Navigate to the signup page
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Slate Dashboard
        </Typography>
        <Button color="inherit" component="a" href="/">Home</Button>
        <Button color="inherit" component="a" href="/admin">Admin Dashboard</Button>
        <Button color="inherit" component="a" href="/school">School Dashboard</Button>
        <Button color="inherit" component="a" href="/parent">Parent Dashboard</Button>
        <Button color="inherit" component="a" href="/student">Student Dashboard</Button>
        {loggedIn ? (
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <>
            <Button color="inherit" onClick={handleLogin}>
              Login
            </Button>
            <Button color="inherit" onClick={handleSignUp}>
              Sign Up
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
