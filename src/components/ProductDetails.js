import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import { products } from './ProductList';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedIcon from '@mui/icons-material/Verified';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styled } from '@mui/material/styles';

const ProductImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  objectFit: 'contain',
  borderRadius: '12px',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const ProductDetailsContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(6),
}));

const ProductDetailsPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
}));

const PriceTag = styled(Typography)(({ theme }) => ({
  color: 'var(--primary-color)',
  fontWeight: 700,
  fontSize: '2rem',
  marginBottom: theme.spacing(2),
}));

const FeatureChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: '#e8f5e9',
  color: 'var(--primary-color)',
  '& .MuiSvgIcon-root': {
    color: 'var(--primary-color)',
  },
}));

const nutritionalInfo = {
  'Apple': {
    calories: '52 kcal',
    fiber: '2.4g',
    vitamin_c: '4.6mg',
    benefits: ['Heart Health', 'Blood Sugar Control', 'Anti-inflammatory']
  },
  'Banana': {
    calories: '89 kcal',
    fiber: '2.6g',
    potassium: '358mg',
    benefits: ['Energy Boost', 'Digestive Health', 'Muscle Function']
  },
  'Orange': {
    calories: '43 kcal',
    fiber: '2.4g',
    vitamin_c: '53.2mg',
    benefits: ['Immune Support', 'Skin Health', 'Antioxidants']
  },
  'Grapes': {
    calories: '69 kcal',
    fiber: '0.9g',
    vitamin_k: '14.6mcg',
    benefits: ['Heart Health', 'Anti-aging', 'Brain Function']
  },
  'Mango': {
    calories: '60 kcal',
    fiber: '1.6g',
    vitamin_a: '54mcg',
    benefits: ['Eye Health', 'Immunity', 'Digestion']
  },
  'Pineapple': {
    calories: '50 kcal',
    fiber: '1.4g',
    vitamin_c: '47.8mg',
    benefits: ['Anti-inflammatory', 'Digestion', 'Immune Support']
  }
};

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const nutrition = nutritionalInfo[product?.name] || {};

  if (!product) {
    return (
      <Container maxWidth="md" sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h4" gutterBottom>Product not found</Typography>
        <Button
          component={Link}
          to="/products"
          startIcon={<ArrowBackIcon />}
          variant="contained"
          sx={{ mt: 2 }}
        >
          Back to Products
        </Button>
      </Container>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setSnackbarOpen(true);
  };

  return (
    <ProductDetailsContainer maxWidth="lg">
      <Button
        component={Link}
        to="/products"
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 4 }}
      >
        Back to Products
      </Button>

      <ProductDetailsPaper>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: '#f5f5f5',
                borderRadius: '12px',
                p: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ProductImage src={product.image} alt={product.name} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
              {product.name}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Rating value={4.5} precision={0.5} readOnly />
              <Typography variant="body2" sx={{ ml: 1, color: 'text.secondary' }}>
                (4.5/5 based on customer reviews)
              </Typography>
            </Box>
            <PriceTag>₹{product.price.toFixed(2)}</PriceTag>
            <Typography variant="body1" paragraph sx={{ mb: 3 }}>
              {product.description}
            </Typography>
            
            <Box sx={{ mb: 3 }}>
              <FeatureChip icon={<LocalShippingIcon />} label="Free Delivery" />
              <FeatureChip icon={<VerifiedIcon />} label="100% Fresh" />
            </Box>

            <Button
              variant="contained"
              size="large"
              onClick={handleAddToCart}
              startIcon={<ShoppingCartIcon />}
              sx={{
                py: 1.5,
                px: 4,
                backgroundColor: 'var(--primary-color)',
                '&:hover': {
                  backgroundColor: '#388e3c',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.2s ease-in-out',
              }}
            >
              Add to Cart
            </Button>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
            Product Information
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ backgroundColor: '#f8f9fa', borderRadius: '12px', p: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ color: 'var(--primary-color)' }}>
                  Nutritional Information
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Calories:</strong> {nutrition.calories}
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Fiber:</strong> {nutrition.fiber}
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Origin:</strong> {product.origin || 'India'}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ backgroundColor: '#f8f9fa', borderRadius: '12px', p: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ color: 'var(--primary-color)' }}>
                  Health Benefits
                </Typography>
                {nutrition.benefits?.map((benefit, index) => (
                  <Chip
                    key={index}
                    label={benefit}
                    sx={{
                      m: 0.5,
                      backgroundColor: '#e8f5e9',
                      color: 'var(--primary-color)',
                    }}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </ProductDetailsPaper>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          {product.name} added to cart successfully!
        </Alert>
      </Snackbar>
    </ProductDetailsContainer>
  );
}

export default ProductDetails;