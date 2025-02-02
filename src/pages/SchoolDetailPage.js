import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';

const SchoolDetailPage = () => {
  const { id } = useParams(); // Get the school ID from the URL

  // You can fetch the school details based on the ID or use static data for now
  const school = { name: 'Greenwood High School', location: 'New York', studentCount: 500 };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {school.name} Details
      </Typography>
      <Typography variant="h6">Location: {school.location}</Typography>
      <Typography variant="h6">Total Students: {school.studentCount}</Typography>

      <Button variant="contained" color="primary" sx={{ marginTop: 3 }}>
        Edit School Details
      </Button>
    </Container>
  );
};

export default SchoolDetailPage;
