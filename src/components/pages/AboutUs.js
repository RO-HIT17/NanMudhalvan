import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

function AboutUs() {
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom component="h1" align="center">
          About Us
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            Welcome to Grocery Store
          </Typography>
          <Typography paragraph>
            We are committed to providing our customers with fresh, high-quality groceries at competitive prices. 
            Our journey began with a simple mission: to make grocery shopping convenient and enjoyable for everyone.
          </Typography>
          <Typography paragraph>
            Founded in 2025, we have grown from a small local store to a trusted online grocery platform, 
            serving thousands of satisfied customers. Our success is built on our commitment to quality, 
            convenience, and exceptional customer service.
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            Our Vision
          </Typography>
          <Typography paragraph>
            To be the most trusted and convenient online grocery shopping destination, delivering happiness 
            to every household through quality products and excellent service.
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            Our Values
          </Typography>
          <Typography component="ul" sx={{ pl: 2 }}>
            <li>Quality First</li>
            <li>Customer Satisfaction</li>
            <li>Reliability</li>
            <li>Transparency</li>
            <li>Environmental Responsibility</li>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default AboutUs;