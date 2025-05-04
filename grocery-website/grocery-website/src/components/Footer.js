import React, { useState } from 'react';
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
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import RefundPolicy from './pages/RefundPolicy';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'var(--footer-bg)',
  color: 'var(--footer-text)',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(4),
  marginTop: 'auto',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(to right, var(--gradient-start), var(--gradient-end))',
  }
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: 'inherit',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(1.5),
  transition: 'all 0.3s ease',
  position: 'relative',
  paddingLeft: theme.spacing(1),
  '&:hover': {
    color: 'var(--gradient-start)',
    transform: 'translateX(8px)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '-5px',
    top: '50%',
    width: '0',
    height: '2px',
    backgroundColor: 'var(--gradient-start)',
    transition: 'width 0.3s ease',
    transform: 'translateY(-50%)',
  },
  '&:hover::before': {
    width: '15px',
  }
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: 'var(--footer-text)',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  margin: theme.spacing(0, 0.5),
  padding: theme.spacing(1.2),
  '&:hover': {
    backgroundColor: 'var(--gradient-start)',
    transform: 'translateY(-4px) rotate(8deg)',
  },
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(2),
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    transform: 'translateX(8px)',
  },
  '& .MuiSvgIcon-root': {
    color: 'var(--gradient-start)',
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function PolicyDialog({ open, onClose }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Policies</DialogTitle>
      <DialogContent>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="policy tabs">
            <Tab label="Terms & Conditions" {...a11yProps(0)} />
            <Tab label="Privacy Policy" {...a11yProps(1)} />
            <Tab label="Shipping Policy" {...a11yProps(2)} />
            <Tab label="Refund Policy" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <TermsAndConditions />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PrivacyPolicy />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ShippingPolicy />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <RefundPolicy />
        </TabPanel>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

function Footer() {
  const [policyDialogOpen, setPolicyDialogOpen] = useState(false);

  const handlePolicyDialogOpen = () => {
    setPolicyDialogOpen(true);
  };

  const handlePolicyDialogClose = () => {
    setPolicyDialogOpen(false);
  };

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
              <FooterLink onClick={handlePolicyDialogOpen} style={{cursor: 'pointer'}}>
                All Policies
              </FooterLink>
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
            mt: 6,
            pt: 3,
            textAlign: 'center',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '-1px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '50px',
              height: '3px',
              background: 'linear-gradient(to right, var(--gradient-start), var(--gradient-end))',
              borderRadius: '4px',
            }
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Grocery Store. All rights reserved.
          </Typography>
        </Box>
      </Container>
      <PolicyDialog open={policyDialogOpen} onClose={handlePolicyDialogClose} />
    </FooterContainer>
  );
}

export default Footer;