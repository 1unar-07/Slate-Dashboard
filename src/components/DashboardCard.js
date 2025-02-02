import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const DashboardCard = ({ title, value }) => {
  return (
    <Card sx={{ minWidth: 250, p: 2, textAlign: "center", boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h4">{value}</Typography>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
