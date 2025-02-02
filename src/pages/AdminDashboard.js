import React, { useState } from 'react';
import { Container, Grid, Typography, Button, Card, CardContent, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  // Sample data for schools and students
  const [schools] = useState([
    { id: 1, name: 'Greenwood High School', studentCount: 500 },
    { id: 2, name: 'Riverside Academy', studentCount: 300 },
    { id: 3, name: 'Oakwood International School', studentCount: 450 },
  ]);

  const [students] = useState([
    { id: 1, name: 'Alice Johnson', school: 'Greenwood High School', achievements: 5 },
    { id: 2, name: 'Bob Smith', school: 'Riverside Academy', achievements: 3 },
    { id: 3, name: 'Charlie Brown', school: 'Oakwood International School', achievements: 4 },
    { id: 4, name: 'David White', school: 'Greenwood High School', achievements: 6 },
  ]);

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Admin Dashboard
      </Typography>

      {/* Overview of Schools */}
      <Typography variant="h5" gutterBottom>
        Schools Overview
      </Typography>
      <Grid container spacing={3}>
        {schools.map((school) => (
          <Grid item xs={12} sm={6} md={4} key={school.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{school.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Total Students: {school.studentCount}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  component={Link}
                  to={`/school/${school.id}`}
                  variant="contained"
                  color="primary"
                >
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Overview of Students */}
      <Typography variant="h5" gutterBottom sx={{ marginTop: 4 }}>
        Students Overview
      </Typography>
      <Grid container spacing={3}>
        {students.map((student) => (
          <Grid item xs={12} sm={6} md={4} key={student.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{student.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  School: {student.school}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Achievements: {student.achievements}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  component={Link}
                  to={`/student/${student.id}`}
                  variant="contained"
                  color="primary"
                >
                  View Achievements
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AdminDashboard;
