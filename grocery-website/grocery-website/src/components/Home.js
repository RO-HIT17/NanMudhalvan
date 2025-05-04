import React from 'react';
import { styled } from '@mui/material/styles';
import { 
  Typography, 
  Container, 
  Grid, 
  Box, 
  Button,
  Paper
} from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(8),
}));

const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  background: 'url(/image.png), linear-gradient(135deg, rgba(46, 125, 50, 0.8) 0%, rgba(27, 94, 32, 0.8) 100%)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'white',
  borderRadius: theme.spacing(4),
  padding: theme.spacing(10, 4),
  marginBottom: theme.spacing(10),
  textAlign: 'center',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at top right, rgba(255,255,255,0.2) 0%, transparent 60%)',
  }
}));

const FeatureCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: '#fff',
  borderRadius: theme.spacing(2),
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#E8F5E9',
  borderRadius: '50%',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
}));

const qualityPoints = [
  {
    icon: <VerifiedIcon sx={{ color: 'primary.main' }} />,
    text: 'Premium Quality Products',
  },
  {
    icon: <CheckCircleIcon sx={{ color: 'primary.main' }} />,
    text: 'Certified Organic Options',
  },
  {
    icon: <CheckCircleIcon sx={{ color: 'primary.main' }} />,
    text: 'Farm-Fresh Guarantee',
  },
  {
    icon: <CheckCircleIcon sx={{ color: 'primary.main' }} />,
    text: 'Stringent Quality Checks',
  },
];

const specialOffers = [
  {
    icon: <LocalOfferIcon fontSize="large" />,
    title: 'First Order Discount',
    description: 'Get 20% off on your first order'
  },
  {
    icon: <LocalOfferIcon fontSize="large" />,
    title: 'Weekly Deals',
    description: 'Special discounts every weekend'
  },
  {
    icon: <LocalOfferIcon fontSize="large" />,
    title: 'Loyalty Rewards',
    description: 'Earn points on every purchase'
  }
];

function Home() {
  return (
    <>
      <StyledContainer maxWidth="lg">
        <HeroSection>
          <Typography variant="h2" gutterBottom fontWeight="bold" sx={{ mb: 3, textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            Fresh Groceries
            <br />
            At Your Fingertips
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.9, maxWidth: 600, mx: 'auto', fontSize: '1.2rem' }}>
            Premium quality products with fast delivery and exceptional service
          </Typography>
          <Button
            component={Link}
            to="/products"
            variant="contained"
            size="large"
            startIcon={<ShoppingCartIcon />}
            sx={{
              py: 2,
              px: 4,
              borderRadius: 3,
              backgroundColor: '#fff',
              color: '#2E7D32',
              '&:hover': {
                backgroundColor: '#E8F5E9',
              }
            }}
          >
            Start Shopping
          </Button>
        </HeroSection>

        <Box sx={{ 
          py: 8, 
          px: 4, 
          backgroundColor: '#F8F9FA',
          borderRadius: 4,
          mb: 10 
        }}>
          <Typography variant="h3" align="center" gutterBottom fontWeight="bold" sx={{ mb: 6 }}>
            Quality Assurance
          </Typography>
          <Grid container spacing={3} sx={{ maxWidth: 900, mx: 'auto' }}>
            {qualityPoints.map((point, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 2,
                  backgroundColor: 'white',
                  p: 2,
                  borderRadius: 2,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}>
                  {point.icon}
                  <Typography variant="h6">
                    {point.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" align="center" gutterBottom fontWeight="bold" sx={{ mb: 6 }}>
            Special Offers
          </Typography>
          <Grid container spacing={4}>
            {specialOffers.map((offer, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <FeatureCard elevation={0} sx={{ borderTop: 5, borderColor: 'primary.main' }}>
                  <IconWrapper>
                    {offer.icon}
                  </IconWrapper>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {offer.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {offer.description}
                  </Typography>
                </FeatureCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </StyledContainer>
    </>
  );
}

export default Home;