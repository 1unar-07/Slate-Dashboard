import React, { useState } from 'react';
import { Container, Grid, Typography, Button, Card, CardContent, CardActions } from '@mui/material';
import { useParams, Link } from 'react-router-dom';

const SchoolDashboard = () => {
  const { schoolId } = useParams(); // Get the school ID from the URL
  const [students] = useState([
    { id: 1, name: 'Aakash', achievements: ['Math Award', 'Science Fair 2nd Place'] },
    { id: 2, name: 'Rajesh', achievements: ['Best Art Project'] },
    { id: 3, name: 'Chris Gayle', achievements: ['Perfect Attendance', 'Top in History'] },
    { id: 4, name: 'MS Dhoni', achievements: ['Science Olympiad Champion','Best Cricketer','TOP NOTCH WICKETKEEPER'] },
  ]);

  // Filter students based on the schoolId (For now, assuming all students belong to this school)
  const schoolName = "Greenwood High School"; // This could be dynamic based on the schoolId

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        {schoolName} - Student Dashboard
      </Typography>

      {/* List of Students */}
      <Typography variant="h5" gutterBottom>
        Students List
      </Typography>
      <Grid container spacing={3}>
        {students.map((student) => (
          <Grid item xs={12} sm={6} md={4} key={student.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{student.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Achievements: {student.achievements.length}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  component={Link}
                  to={`/school/${schoolId}/student/${student.id}`}
                  variant="contained"
                  color="primary"
                >
                  Manage Achievements
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SchoolDashboard;
