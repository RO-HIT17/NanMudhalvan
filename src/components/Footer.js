import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'var(--footer-bg)',
  color: 'var(--footer-text)',
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(4),
  marginTop: 'auto',
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: 'inherit',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(1),
  transition: 'color 0.2s ease-in-out',
  '&:hover': {
    color: theme.palette.primary.light,
  },
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: 'var(--footer-text)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    transform: 'translateY(-2px)',
  },
  transition: 'transform 0.2s ease-in-out',
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

function Footer() {
  return (
    <FooterContainer component="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              🛒 Grocery Store
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Your one-stop shop for fresh groceries and daily essentials.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <SocialIcon size="small" aria-label="Facebook">
                <FacebookIcon />
              </SocialIcon>
              <SocialIcon size="small" aria-label="Twitter">
                <TwitterIcon />
              </SocialIcon>
              <SocialIcon size="small" aria-label="Instagram">
                <InstagramIcon />
              </SocialIcon>
              <SocialIcon size="small" aria-label="LinkedIn">
                <LinkedInIcon />
              </SocialIcon>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <FooterLink to="/products">Products</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/faq">FAQ</FooterLink>
              <FooterLink to="/cart">Shopping Cart</FooterLink>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Legal
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <FooterLink to="/terms">Terms & Conditions</FooterLink>
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
              <FooterLink to="/shipping">Shipping Policy</FooterLink>
              <FooterLink to="/refund">Refund Policy</FooterLink>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Contact Us
            </Typography>
            <ContactInfo>
              <LocationOnIcon fontSize="small" />
              <Typography variant="body2">
                123 Grocery Street, Food City, FC 12345
              </Typography>
            </ContactInfo>
            <ContactInfo>
              <PhoneIcon fontSize="small" />
              <Typography variant="body2">
                +1 (555) 123-4567
              </Typography>
            </ContactInfo>
            <ContactInfo>
              <EmailIcon fontSize="small" />
              <Typography variant="body2">
                support@grocerystore.com
              </Typography>
            </ContactInfo>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            mt: 4,
            pt: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Grocery Store. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
}

export default Footer;