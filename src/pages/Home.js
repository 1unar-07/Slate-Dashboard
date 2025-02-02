import React, { useState } from "react";
import { Container, Typography, Button, Grid, Paper, Switch } from "@mui/material";
import { motion } from "framer-motion";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div style={{
      backgroundColor: darkMode ? "#121212" : "#f4f4f4",
      color: darkMode ? "#fff" : "#000",
      minHeight: "100vh",
      transition: "all 0.3s ease",
    }}>
      <Container maxWidth="lg" style={{ padding: "2rem" }}>
        {/* Navbar */}
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="h4" fontWeight="bold">Slate Dashboard</Typography>
        </Grid>
        
        {/* Dark Mode Toggle */}
        <Grid container justifyContent="flex-end" alignItems="center" style={{ marginTop: "1rem" }}>
          <Brightness7 />
          <Switch checked={darkMode} onChange={toggleDarkMode} />
          <Brightness4 />
        </Grid>
        
        {/* Hero Section */}
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography variant="h3" align="center" fontWeight="bold" gutterBottom>
            Welcome to Slate Dashboard
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary">
            A powerful way to manage student achievements, schools, and performance.
          </Typography>
          <Grid container justifyContent="center" style={{ marginTop: "1.5rem" }}>
            <Button variant="contained" color="primary" size="large">Get Started</Button>
          </Grid>
        </motion.div>

        {/* Role Selection */}
        <Grid container spacing={3} style={{ marginTop: "3rem" }}>
          {["Admin", "School", "Parent", "Student"].map((role, index) => (
            <Grid item xs={12} sm={6} md={3} key={role}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Paper elevation={3} style={{ padding: "1.5rem", textAlign: "center", cursor: "pointer" }}>
                  <Typography variant="h6" fontWeight="bold">{role} Dashboard</Typography>
                  <Typography variant="body2" color="textSecondary">Manage and view {role.toLowerCase()} data</Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
