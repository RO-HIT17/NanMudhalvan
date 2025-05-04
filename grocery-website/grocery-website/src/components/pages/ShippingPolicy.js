import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function ShippingPolicy() {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Shipping Policy
      </Typography>

      <Box sx={{ mt: 3 }}>
        <Typography variant="body1" paragraph>
          We are committed to delivering your groceries fresh and on time. Please review our shipping policy below for detailed information on how we handle your orders.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Delivery Areas
        </Typography>
        <Typography variant="body1" paragraph>
          We currently offer delivery within selected areas of Food City. Please enter your postal code during checkout to verify availability.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Delivery Times
        </Typography>
        <Typography variant="body1" paragraph>
          - Orders placed before 12 PM are eligible for same-day delivery.<br />
          - Orders placed after 12 PM will be delivered the next day.<br />
          - No deliveries are made on public holidays.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Shipping Charges
        </Typography>
        <Typography variant="body1" paragraph>
- Free shipping on orders above %50.<br />
          - A flat delivery fee of ₹4.99 applies to orders below ₹50.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Tracking & Support
        </Typography>
        <Typography variant="body1" paragraph>
          You will receive a confirmation email with tracking details once your order is dispatched. For any delivery-related queries, please contact our support team at <strong>support@grocerystore.com</strong>.
        </Typography>

        <Typography variant="body1" color="text.secondary" mt={4}>
          Thank you for shopping with us!
        </Typography>
      </Box>
    </Container>
  );
}

export default ShippingPolicy;
