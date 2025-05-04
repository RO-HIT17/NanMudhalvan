import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

function PrivacyPolicy() {
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom component="h1" align="center">
          Privacy Policy
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            1. Information We Collect
          </Typography>
          <Typography paragraph>
            We collect information that you provide directly to us, including:
          </Typography>
          <Typography component="ul" sx={{ pl: 2, mb: 2 }}>
            <li>Name and contact information</li>
            <li>Delivery address</li>
            <li>Payment information</li>
            <li>Order history</li>
            <li>Communication preferences</li>
          </Typography>

          <Typography variant="h6" gutterBottom>
            2. How We Use Your Information
          </Typography>
          <Typography paragraph>
            We use the information we collect to:
          </Typography>
          <Typography component="ul" sx={{ pl: 2, mb: 2 }}>
            <li>Process your orders and payments</li>
            <li>Deliver products to you</li>
            <li>Send order confirmations and updates</li>
            <li>Provide customer support</li>
            <li>Improve our services</li>
            <li>Send promotional communications (with your consent)</li>
          </Typography>

          <Typography variant="h6" gutterBottom>
            3. Information Sharing
          </Typography>
          <Typography paragraph>
            We do not sell or rent your personal information to third parties. We may share your information with:
          </Typography>
          <Typography component="ul" sx={{ pl: 2, mb: 2 }}>
            <li>Delivery partners to fulfill orders</li>
            <li>Payment processors to handle transactions</li>
            <li>Service providers who assist our operations</li>
          </Typography>

          <Typography variant="h6" gutterBottom>
            4. Data Security
          </Typography>
          <Typography paragraph>
            We implement appropriate security measures to protect your personal information from unauthorized access, 
            alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security assessments.
          </Typography>

          <Typography variant="h6" gutterBottom>
            5. Your Rights
          </Typography>
          <Typography paragraph>
            You have the right to:
          </Typography>
          <Typography component="ul" sx={{ pl: 2, mb: 2 }}>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
            <li>Lodge a complaint with supervisory authorities</li>
          </Typography>

          <Typography variant="h6" gutterBottom>
            6. Cookies and Tracking
          </Typography>
          <Typography paragraph>
            We use cookies and similar tracking technologies to enhance your shopping experience and analyze website traffic. 
            You can control cookie settings through your browser preferences.
          </Typography>

          <Typography variant="h6" gutterBottom>
            7. Changes to Privacy Policy
          </Typography>
          <Typography paragraph>
            We may update this privacy policy periodically. We will notify you of any material changes by posting the new 
            policy on this page and updating the "Last Updated" date.
          </Typography>

          <Typography variant="h6" gutterBottom>
            8. Contact Us
          </Typography>
          <Typography paragraph>
            If you have any questions about this Privacy Policy, please contact us at privacy@grocerystore.com
          </Typography>

          <Typography variant="body2" sx={{ mt: 4, fontStyle: 'italic' }}>
            Last updated: April 2025
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default PrivacyPolicy;