import React, { useState } from 'react';
import { Container, Typography, TextField, Grid, Paper, Button } from '@mui/material';

const ParentDashboard = () => {
  // Sample achievements data (This could be fetched from an API or database in a real app)
  const [achievements] = useState([
    { id: 1, subject: 'Math', description: 'Completed all assignments with excellent grades', date: '2025-01-15' },
    { id: 2, subject: 'Science', description: 'Participated in the science fair and won 2nd place', date: '2025-01-10' },
    { id: 3, subject: 'English', description: 'Improved writing skills and achieved 90% in final exam', date: '2025-01-12' },
    { id: 4, subject: 'History', description: 'Completed a research project on Ancient Egypt', date: '2025-01-14' },
    { id: 5, subject: 'Physical Education', description: 'Achieved a fitness milestone of running 5 miles in 30 minutes', date: '2025-01-18' },
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');

  // Filter achievements based on search term
  const filteredAchievements = achievements.filter(achievement =>
    achievement.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    achievement.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom align="center">
        Parent Dashboard
      </Typography>
      
      {/* Search Bar */}
      <TextField
        label="Search Achievements"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={handleSearchChange}
        sx={{ marginBottom: 3 }}
      />

      {/* Achievements List */}
      <Grid container spacing={3}>
        {filteredAchievements.length > 0 ? (
          filteredAchievements.map((achievement) => (
            <Grid item xs={12} sm={6} key={achievement.id}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Typography variant="h6">{achievement.subject}</Typography>
                <Typography variant="body1">{achievement.description}</Typography>
                <Typography variant="body2" color="textSecondary">{`Date: ${achievement.date}`}</Typography>
              </Paper>
            </Grid>
          ))
        ) : (
          <Typography variant="body1" color="textSecondary" align="center" fullWidth>
            No achievements found.
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default ParentDashboard;
