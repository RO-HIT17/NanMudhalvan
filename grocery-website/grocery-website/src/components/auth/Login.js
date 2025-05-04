import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Avatar,
  Button,
  TextField,
  Paper,
  Box,
  Grid,
  Typography,
  Container,
  Alert,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { styled } from '@mui/material/styles';

const LoginContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  minHeight: '100vh',
  padding: theme.spacing(3),
  width: '100%',
  //backgroundImage: 'url(/chips-643_640.jpg)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: 'var(--primary-color)',
  width: theme.spacing(7),
  height: theme.spacing(7),
  '& .MuiSvgIcon-root': {
    fontSize: '2rem',
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    '&.Mui-focused fieldset': {
      borderColor: 'var(--primary-color)',
    },
  },
  '& label.Mui-focused': {
    color: 'var(--primary-color)',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
  padding: theme.spacing(1.5),
  borderRadius: '8px',
  fontSize: '1.1rem',
  backgroundColor: 'var(--primary-color)',
  '&:hover': {
    backgroundColor: '#388e3c',
    transform: 'translateY(-2px)',
  },
  transition: 'all 0.2s ease-in-out',
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: 'var(--primary-color)',
  fontWeight: 500,
  transition: 'color 0.2s ease-in-out',
  '&:hover': {
    color: '#388e3c',
  },
}));

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }
    const user_name = localStorage.getItem("username");
    const password = localStorage.getItem("password")
    if(user_name === formData.email && formData.password === password) {
      login();
      navigate('/');
  }
  else {
    setError('Login failed. Incorrect email or password.');
  }
  };

  return (
    <LoginContainer maxWidth="xs">
      <Paper elevation={6} sx={{
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: '#fff',
        borderRadius: 2,
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
        },
      }}>
        <StyledAvatar>
          <LockOutlinedIcon />
        </StyledAvatar>
        <Typography
          component="h1"
          variant="h4"
          sx={{
            mb: 3,
            fontWeight: 700,
            color: 'var(--primary-color)',
          }}
        >
          Welcome Back
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
          {error && (
            <Alert
              severity="error"
              sx={{
                mb: 2,
                borderRadius: '8px',
              }}
            >
              {error}
            </Alert>
          )}
          <StyledTextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formData.email}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: 'text.secondary' }} />
                </InputAdornment>
              ),
            }}
          />
          <StyledTextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <StyledButton
            type="submit"
            fullWidth
            variant="contained"
          >
            Sign In
          </StyledButton>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <StyledLink to="/forgot-password">
                Forgot password?
              </StyledLink>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ textAlign: { sm: 'right' } }}>
              <StyledLink to="/signup">
                Create Account
              </StyledLink>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </LoginContainer>
  );
}

export default Login;