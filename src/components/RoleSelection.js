import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { School, AccountCircle, SupervisorAccount, Person } from "@mui/icons-material";

const roles = [
  { name: "Admin", icon: <SupervisorAccount />, path: "/admin" },
  { name: "School", icon: <School />, path: "/school" },
  { name: "Parent", icon: <AccountCircle />, path: "/parent" },
  { name: "Student", icon: <Person />, path: "/student" }
];

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Grid container spacing={3} style={{ maxWidth: "600px" }}>
        {roles.map((role) => (
          <Grid item xs={6} key={role.name}>
            <Card
              onClick={() => navigate(role.path)}
              style={{ textAlign: "center", cursor: "pointer", padding: "20px", transition: "0.3s", borderRadius: "10px" }}
              sx={{ "&:hover": { boxShadow: 6 } }}
            >
              <CardContent>
                {role.icon}
                <Typography variant="h6" style={{ marginTop: "10px" }}>{role.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default RoleSelection;
