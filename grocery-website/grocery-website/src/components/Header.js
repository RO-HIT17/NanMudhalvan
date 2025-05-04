import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import InfoIcon from '@mui/icons-material/Info';
import HelpIcon from '@mui/icons-material/Help';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled, useTheme } from '@mui/material/styles';
import { useAuth } from '../contexts/AuthContext';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(to right, var(--gradient-start), var(--gradient-end))',
  boxShadow: 'none',
  backdropFilter: 'blur(8px)',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  transition: 'all 0.3s ease',
  '&.scrolled': {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  }
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 3),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(0, 5),
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: 'white',
  textDecoration: 'none',
  fontSize: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  '&:hover': {
    color: 'rgba(255, 255, 255, 0.9)',
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: 'white',
  marginLeft: theme.spacing(2),
  fontWeight: 600,
  borderRadius: '50px',
  padding: '8px 20px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
}));

const DrawerContent = styled(Box)(({ theme }) => ({
  width: 250,
  paddingTop: theme.spacing(2),
}));

function Header() {
  const { logout } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    logout();
    setMobileOpen(false);
  };

  const menuItems = [
    { text: 'Products', path: '/products', icon: null },
    { text: 'Cart', path: '/cart', icon: <ShoppingCartIcon /> },
    { text: 'About Us', path: '/about', icon: <InfoIcon /> },
    { text: 'FAQ', path: '/faq', icon: <HelpIcon /> },
  ];

  const drawer = (
    <DrawerContent>
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.path}
            onClick={() => setMobileOpen(false)}
          >
            {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        <ListItem button onClick={handleLogout}>
          <ListItemIcon><LogoutIcon /></ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </DrawerContent>
  );

  return (
    <StyledAppBar position="fixed" className={scrolled ? 'scrolled' : ''}>
      <StyledToolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}>
          <Title component="div">
            🛒 Grocery Store
          </Title>
        </Typography>
        
        {isMobile ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {menuItems.map((item) => (
              <NavButton
                key={item.text}
                color="inherit"
                component={Link}
                to={item.path}
                startIcon={item.icon}
              >
                {item.text}
              </NavButton>
            ))}
            <NavButton color="inherit" onClick={handleLogout} startIcon={<LogoutIcon />}>
              Logout
            </NavButton>
          </Box>
        )}
      </StyledToolbar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </StyledAppBar>
  );
}

export default Header;