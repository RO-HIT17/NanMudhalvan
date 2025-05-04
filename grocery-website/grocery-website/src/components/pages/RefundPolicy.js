import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function RefundPolicy() {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Refund Policy
      </Typography>

      <Box sx={{ mt: 3 }}>
        <Typography variant="body1" paragraph>
          At Grocery Store, we strive to ensure our customers are fully satisfied with their purchases. If you are not entirely happy with your order, we're here to help.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Refund Eligibility
        </Typography>
        <Typography variant="body1" paragraph>
          - You may request a refund within <strong>7 days</strong> of delivery.<br />
          - Items must be unused, unopened, and in the original packaging.<br />
          - Perishable goods like fruits, vegetables, dairy, and meats are non-refundable unless they arrived damaged or spoiled.
        </Typography>

        <Typography variant="h6" gutterBottom>
          How to Request a Refund
        </Typography>
        <Typography variant="body1" paragraph>
          Please contact our support team at <strong>support@grocerystore.com</strong> with your order number and reason for the refund request. Our team will assess your request and get back to you within 24–48 hours.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Refund Processing
        </Typography>
        <Typography variant="body1" paragraph>
          Once approved, your refund will be processed to your original method of payment within 5–7 business days. You will receive a confirmation email once the refund is issued.
        </Typography>

        <Typography variant="body1" color="text.secondary" mt={4}>
          For more details, please read our full Terms & Conditions.
        </Typography>
      </Box>
    </Container>
  );
}

export default RefundPolicy;
