import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';

const StudentDetailPage = () => {
  const { id } = useParams(); // Get the student ID from the URL

  // You can fetch student data and achievements based on the ID
  const student = { name: 'Alice Johnson', school: 'Greenwood High School', achievements: ['Math Award', 'Science Fair 2nd Place'] };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {student.name}'s Achievements
      </Typography>
      <Typography variant="h6">School: {student.school}</Typography>
      <Typography variant="h6">Achievements:</Typography>
      <ul>
        {student.achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>

      <Button variant="contained" color="primary" sx={{ marginTop: 3 }}>
        Edit Achievements
      </Button>
    </Container>
  );
};

export default StudentDetailPage;
