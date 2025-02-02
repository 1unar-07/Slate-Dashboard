import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Paper, Typography } from "@mui/material";

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleSelectRole = (role) => {
    localStorage.setItem("userRole", role);
    navigate(`/${role}-dashboard`);
  };

  return (
    <Paper elevation={3} style={{ padding: "30px", maxWidth: "400px", margin: "100px auto", textAlign: "center" }}>
      <Typography variant="h5" gutterBottom>Select Your Role</Typography>
      <Button variant="contained" fullWidth onClick={() => handleSelectRole("admin")} style={{ marginTop: "10px" }}>
        Admin
      </Button>
      <Button variant="contained" fullWidth onClick={() => handleSelectRole("school")} style={{ marginTop: "10px" }}>
        School
      </Button>
      <Button variant="contained" fullWidth onClick={() => handleSelectRole("parent")} style={{ marginTop: "10px" }}>
        Parent
      </Button>
      <Button variant="contained" fullWidth onClick={() => handleSelectRole("student")} style={{ marginTop: "10px" }}>
        Student
      </Button>
    </Paper>
  );
};

export default RoleSelection;
