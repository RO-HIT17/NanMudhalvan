import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

function TermsAndConditions() {
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom component="h1" align="center">
          Terms and Conditions
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            1. Acceptance of Terms
          </Typography>
          <Typography paragraph>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
          </Typography>

          <Typography variant="h6" gutterBottom>
            2. Use License
          </Typography>
          <Typography paragraph>
            Permission is granted to temporarily download one copy of the materials (information or software) on Grocery Store's website for personal, non-commercial transitory viewing only.
          </Typography>

          <Typography variant="h6" gutterBottom>
            3. Ordering and Payment
          </Typography>
          <Typography paragraph>
            - All orders are subject to product availability<br />
            - We reserve the right to refuse service to anyone<br />
            - Prices are subject to change without notice<br />
            - Payment must be received prior to delivery unless cash on delivery is selected
          </Typography>

          <Typography variant="h6" gutterBottom>
            4. Delivery Policy
          </Typography>
          <Typography paragraph>
            - Delivery times are estimates only<br />
            - We are not responsible for delays beyond our control<br />
            - Risk of loss and title for items purchased pass to you upon delivery
          </Typography>

          <Typography variant="h6" gutterBottom>
            5. Return Policy
          </Typography>
          <Typography paragraph>
            - Products can be returned at the time of delivery if found unsatisfactory<br />
            - Refunds will be processed within 5-7 business days<br />
            - Some items are non-returnable for hygiene reasons
          </Typography>

          <Typography variant="h6" gutterBottom>
            6. Account Security
          </Typography>
          <Typography paragraph>
            You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
          </Typography>

          <Typography variant="h6" gutterBottom>
            7. Privacy
          </Typography>
          <Typography paragraph>
            Your use of Grocery Store's website is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the site and informs users of our data collection practices.
          </Typography>

          <Typography variant="h6" gutterBottom>
            8. Governing Law
          </Typography>
          <Typography paragraph>
            These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </Typography>

          <Typography variant="body2" sx={{ mt: 4, fontStyle: 'italic' }}>
            Last updated: April 2025
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default TermsAndConditions;