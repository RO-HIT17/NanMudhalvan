import React, { useEffect, useState } from 'react';
import { Container, Typography, Paper, Box, List, ListItem, ListItemText } from '@mui/material';

function OrderConfirmation() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const orderData = localStorage.getItem('order');
    if (orderData) {
      setOrder(JSON.parse(orderData));
    }
  }, []);

  if (!order) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
          <Typography variant="h6">No order found.</Typography>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Order Confirmation
        </Typography>
        <Typography variant="body1">
          Thank you for your order! Here are the details:
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Order ID: {order.orderId}
        </Typography>
        <Typography variant="body1">
          Order Date: {order.date}
        </Typography>

        <Typography variant="h6" sx={{ mt: 2 }}>
          Shipping Address:
        </Typography>
        <Typography variant="body1">
          {order.shippingAddress.name}
        </Typography>
        <Typography variant="body1">
          {order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}
        </Typography>

        <Typography variant="h6" sx={{ mt: 2 }}>
          Order Items:
        </Typography>
        <List>
          {order.items.map((item, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={item.name}
                secondary={`Quantity: ${item.quantity} - ₹${item.price.toFixed(2)}`}
              />
            </ListItem>
          ))}
        </List>

        <Typography variant="h6" sx={{ mt: 2 }}>
          Total: ₹{order.total.toFixed(2)}
        </Typography>

        <Typography variant="body2" sx={{ mt: 3, fontStyle: 'italic' }}>
          You will receive an email with tracking information once your order has shipped.
        </Typography>
      </Paper>
    </Container>
  );
}

export default OrderConfirmation;