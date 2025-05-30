import React, { useState, useContext } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';

const CheckoutContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(8),
  animation: 'fadeIn 0.5s ease-out',
  '@keyframes fadeIn': {
    from: {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
}));

const CheckoutTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: 'var(--primary-color)',
  fontWeight: 700,
  marginBottom: theme.spacing(4),
}));

const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '20px',
  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.05)',
  border: '1px solid rgba(0, 0, 0, 0.05)',
  backgroundColor: '#fff',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
}));

const OrderSummary = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '20px',
  backgroundColor: '#f8f9fa',
  height: '100%',
  border: '1px solid rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.05)',
    transform: 'translateY(-4px)',
  }
}));

const SuccessContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(8),
  textAlign: 'center',
  borderRadius: '20px',
  backgroundColor: 'rgba(46, 204, 113, 0.08)',
  marginTop: theme.spacing(4),
  border: '1px solid rgba(46, 204, 113, 0.2)',
  animation: 'fadeIn 0.5s ease-out',
  '@keyframes fadeIn': {
    from: {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    '&:hover': {
      '& fieldset': {
        borderColor: 'var(--primary-color)',
      }
    },
    '&.Mui-focused': {
      '& fieldset': {
        borderColor: 'var(--primary-color)',
        borderWidth: '2px',
      }
    },
  },
  '& .MuiInputLabel-root': {
    '&.Mui-focused': {
      color: 'var(--primary-color)',
    }
  },
}));

function Checkout() {
  const { cart, getCartTotal } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const order = {
      orderId: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      date: new Date().toLocaleDateString(),
      items: cart.map(item => ({ name: item.name, quantity: item.quantity, price: item.price })),
      total: getCartTotal(),
      shippingAddress: formData
    };
    localStorage.setItem('order', JSON.stringify(order));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <CheckoutContainer maxWidth="md">
        <SuccessContainer elevation={0}>
          <CheckCircleIcon sx={{ fontSize: 80, color: 'var(--primary-color)', mb: 2 }} />
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, color: 'var(--primary-color)' }}>
            Order Confirmed!
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ color: 'text.secondary', mb: 4 }}>
            Thank you for your order! Your groceries will be delivered shortly.
          </Typography>
          <LocalShippingIcon sx={{ fontSize: 40, color: 'text.secondary', mb: 2 }} />
          <Typography variant="body1" color="text.secondary" paragraph>
            We'll send you an email with order details and tracking information.
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/order-confirmation"
            startIcon={<ShoppingBagIcon />}
            sx={{
              mt: 3,
              backgroundColor: 'var(--primary-color)',
              '&:hover': { backgroundColor: '#388e3c' },
            }}
          >
            Continue Shopping
          </Button>
        </SuccessContainer>
      </CheckoutContainer>
    );
  }

  return (
    <CheckoutContainer maxWidth="lg">
      <Box className="section">
        <Typography variant="h3" className="section-title" gutterBottom>
          Checkout
        </Typography>
      </Box>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <FormContainer elevation={1}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Delivery Information
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <StyledTextField
                    required
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: <PersonIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <StyledTextField
                    required
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: <EmailIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <StyledTextField
                    required
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: <PhoneIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField
                    required
                    fullWidth
                    label="Delivery Address"
                    name="address"
                    multiline
                    rows={3}
                    value={formData.address}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: <HomeIcon sx={{ mr: 1, mt: 1, color: 'text.secondary' }} />,
                    }}
                  />
                </Grid>
                
              </Grid>
            </Box>
          </FormContainer>
        </Grid>

        <Grid item xs={12} md={4}>
          <OrderSummary elevation={1}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Order Summary
            </Typography>
            <Box sx={{ mb: 3 }}>
              {cart.map((item) => (
                <Box key={item.id} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body1">
                    {item.name} × {item.quantity}
                  </Typography>
                  <Typography variant="body1">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Total
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 600, color: 'var(--primary-color)' }}>
                ₹{getCartTotal().toFixed(2)}
              </Typography>
            </Box>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              onClick={handleSubmit}
              sx={{
                py: 2,
                fontSize: '1.2rem',
                fontWeight: 600,
                borderRadius: '50px',
                backgroundColor: 'var(--primary-color)',
                '&:hover': {
                  backgroundColor: 'var(--gradient-end)',
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 20px rgba(46, 204, 113, 0.3)',
                },
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              Place Order
            </Button>
          </OrderSummary>
        </Grid>
      </Grid>
    </CheckoutContainer>
  );
}

export default Checkout;