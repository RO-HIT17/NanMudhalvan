import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import InventoryIcon from '@mui/icons-material/Inventory';

const HomeContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(8),
}));

const HeroSection = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(8),
}));

const HomeTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  color: 'var(--primary-color)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
  },
}));

const HomeContent = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(4),
  maxWidth: '800px',
  margin: '0 auto',
}));

const FeatureCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '12px',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
  },
}));

const ImageCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '12px',
  overflow: 'hidden',
  backgroundColor: '#f8f9fa',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const HomeImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '8px',
  marginBottom: theme.spacing(2),
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#e8f5e9',
  borderRadius: '50%',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  color: 'var(--primary-color)',
}));

function Home() {
  return (
    <HomeContainer maxWidth="lg">
      <HeroSection>
        <HomeTitle variant="h2" gutterBottom>
          Fresh Groceries Delivered to Your Door
        </HomeTitle>
        <HomeContent variant="h6">
          Experience the convenience of online grocery shopping with our wide selection of fresh,
          high-quality products at competitive prices.
        </HomeContent>
        <Button
          component={Link}
          to="/products"
          variant="contained"
          size="large"
          startIcon={<ShoppingCartIcon />}
          sx={{
            py: 1.5,
            px: 4,
            borderRadius: '50px',
            backgroundColor: 'var(--primary-color)',
            '&:hover': {
              backgroundColor: '#388e3c',
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.2s ease-in-out',
          }}
        >
          Start Shopping
        </Button>
      </HeroSection>

      <Box sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <ImageCard elevation={0}>
              <HomeImage
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZA_14umMpaVhENZwaOZtzg0LWQD09BY6y5A&s"
                alt="Fresh Produce"
              />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Fresh Produce Delivered
              </Typography>
              <Typography variant="body1" color="text.secondary" align="center">
                Experience the vibrant flavors of locally sourced, farm-fresh produce delivered straight to your doorstep.
              </Typography>
            </ImageCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <ImageCard elevation={0}>
              <HomeImage
                src="https://fmtmagazine.in/wp-content/uploads/2022/08/O1_Why-e-commerce-is-a-Complement-to-not-a-Replacement-for-in-store-Grocery-Shopping.jpg"
                alt="Online Shopping"
              />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Shop Online, Anytime
              </Typography>
              <Typography variant="body1" color="text.secondary" align="center">
                Skip the crowded aisles and shop for your favorite groceries with ease, 24/7.
              </Typography>
            </ImageCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <ImageCard elevation={0}>
              <HomeImage
                src="https://cdn2.mageplaza.com/media/blog/grocery-ecommerce-software/advantage-of-grocery.png"
                alt="Delivery Service"
              />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Fast & Reliable Delivery
              </Typography>
              <Typography variant="body1" color="text.secondary" align="center">
                Get your groceries delivered safely and quickly to your doorstep.
              </Typography>
            </ImageCard>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h3"
          gutterBottom
          align="center"
          sx={{
            fontWeight: 700,
            color: 'var(--primary-color)',
            mb: 6
          }}
        >
          Why Choose Us?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <FeatureCard elevation={0}>
              <IconWrapper>
                <StorefrontIcon fontSize="large" />
              </IconWrapper>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Fresh Products
              </Typography>
              <Typography variant="body1" color="text.secondary" align="center">
                Direct from local farmers and trusted suppliers
              </Typography>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FeatureCard elevation={0}>
              <IconWrapper>
                <LocalOfferIcon fontSize="large" />
              </IconWrapper>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Best Prices
              </Typography>
              <Typography variant="body1" color="text.secondary" align="center">
                Competitive prices and regular special offers
              </Typography>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FeatureCard elevation={0}>
              <IconWrapper>
                <LocalShippingIcon fontSize="large" />
              </IconWrapper>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Quick Delivery
              </Typography>
              <Typography variant="body1" color="text.secondary" align="center">
                Same-day delivery available
              </Typography>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FeatureCard elevation={0}>
              <IconWrapper>
                <AccessTimeIcon fontSize="large" />
              </IconWrapper>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                24/7 Support
              </Typography>
              <Typography variant="body1" color="text.secondary" align="center">
                Always here to help you
              </Typography>
            </FeatureCard>
          </Grid>
        </Grid>
      </Box>
    </HomeContainer>
  );
}

export default Home;