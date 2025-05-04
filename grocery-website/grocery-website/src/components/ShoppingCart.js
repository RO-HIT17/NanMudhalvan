import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { CartContext } from '../CartContext';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';

const CartContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '20px',
  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.05)',
  backgroundColor: '#fff',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  border: '1px solid rgba(0, 0, 0, 0.05)',
}));

const CartList = styled(List)(({ theme }) => ({
  width: '100%',
  backgroundColor: 'transparent',
}));

const CartItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(2),
  borderRadius: '16px',
  backgroundColor: '#f8f9fa',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  border: '1px solid rgba(0, 0, 0, 0.05)',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.08)',
    backgroundColor: '#fff',
  },
}));

const EmptyCartBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(6),
  backgroundColor: '#f8f9fa',
  borderRadius: '12px',
}));

const CheckoutButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(2),
  fontWeight: 600,
  fontSize: '1.2rem',
  borderRadius: '50px',
  backgroundColor: 'var(--primary-color)',
  '&:hover': {
    backgroundColor: 'var(--gradient-end)',
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 20px rgba(46, 204, 113, 0.3)',
  },
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
}));

const QuantityTextField = styled(TextField)(({ theme }) => ({
  width: '100px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    backgroundColor: '#fff',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#f8f9fa',
      '& fieldset': {
        borderColor: 'var(--primary-color)',
      }
    },
    '&.Mui-focused': {
      '& fieldset': {
        borderColor: 'var(--primary-color)',
        borderWidth: '2px',
      }
    }
  },
}));

const DeleteButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.error.main,
  '&:hover': {
    backgroundColor: 'rgba(211, 47, 47, 0.1)',
  },
}));

const TotalBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(3),
  borderRadius: '16px',
  backgroundColor: 'rgba(46, 204, 113, 0.08)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: '1px solid rgba(46, 204, 113, 0.2)',
}));

function ShoppingCart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useContext(CartContext);

  const handleQuantityChange = (productId, event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    }
  };

  return (
    <Container maxWidth="md" className="fade-in">
      <Box className="section">
        <Typography
          variant="h3"
          className="section-title"
          component="h1"
          gutterBottom
        >
          Shopping Cart
        </Typography>
      </Box>

      <CartContainer>
        {cart.length === 0 ? (
          <EmptyCartBox>
            <ShoppingCartIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Your Cart is Empty
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Looks like you haven't added any items to your cart yet.
            </Typography>
            <Button
              variant="contained"
              component={Link}
              to="/products"
              startIcon={<ShoppingBagIcon />}
              sx={{
                backgroundColor: 'var(--primary-color)',
                '&:hover': {
                  backgroundColor: '#388e3c',
                }
              }}
            >
              Continue Shopping
            </Button>
          </EmptyCartBox>
        ) : (
          <>
            <CartList>
              {cart.map((product) => (
                <CartItem key={product.id}>
                  <ListItemAvatar>
                    <Avatar
                      alt={product.name}
                      src={product.image}
                      variant="rounded"
                      sx={{ width: 56, height: 56 }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {product.name}
                      </Typography>
                    }
                    secondary={`Price: ₹${product.price}`}
                    sx={{ ml: 2 }}
                  />
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <QuantityTextField
                      type="number"
                      label="Qty"
                      value={product.quantity}
                      onChange={(event) => handleQuantityChange(product.id, event)}
                      inputProps={{ min: 1 }}
                      size="small"
                    />
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, minWidth: '100px' }}>
                      ₹{(product.price * product.quantity).toFixed(2)}
                    </Typography>
                    <DeleteButton
                      onClick={() => removeFromCart(product.id)}
                      aria-label="remove"
                    >
                      <DeleteIcon />
                    </DeleteButton>
                  </Box>
                </CartItem>
              ))}
            </CartList>

            <Divider sx={{ my: 3 }} />

            <TotalBox>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Total Amount:
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 600, color: 'var(--primary-color)' }}>
                ₹{getCartTotal().toFixed(2)}
              </Typography>
            </TotalBox>

            <CheckoutButton
              variant="contained"
              fullWidth
              component={Link}
              to="/checkout"
              startIcon={<ShoppingBagIcon />}
            >
              Proceed to Checkout
            </CheckoutButton>
          </>
        )}
      </CartContainer>
    </Container>
  );
}

export default ShoppingCart;