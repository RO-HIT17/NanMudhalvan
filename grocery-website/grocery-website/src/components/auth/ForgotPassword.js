import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Avatar,
  Button,
  TextField,
  Box,
  Typography,
  InputAdornment,
  Container,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LockResetIcon from '@mui/icons-material/LockReset';
import EmailIcon from '@mui/icons-material/Email';

const ForgotContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  minHeight: 'calc(100vh - 64px)',
  padding: theme.spacing(3),
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

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // In a real app, you would handle password reset here
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <ForgotContainer maxWidth="xs">
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
          width: '100%',
        }}>
          <StyledAvatar>
            <LockResetIcon />
          </StyledAvatar>
          <Typography
            component="h1"
            variant="h4"
            sx={{
              mb: 3,
              fontWeight: 700,
              color: 'var(--primary-color)',
              textAlign: 'center'
            }}
          >
            Email Sent!
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 3 }}>
            If an account exists with the email you provided, you will receive password reset instructions.
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <StyledButton
              variant="contained"
              component={Link}
              to="/login"
              fullWidth
            >
              Return to Login
            </StyledButton>
          </Box>
        </Paper>
      </ForgotContainer>
    );
  }

  return (
    <ForgotContainer maxWidth="xs">
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
        width: '100%',
      }}>
        <StyledAvatar>
          <LockResetIcon />
        </StyledAvatar>
        <Typography
          component="h1"
          variant="h4"
          sx={{
            mb: 3,
            fontWeight: 700,
            color: 'var(--primary-color)',
            textAlign: 'center'
          }}
        >
          Reset Password
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          Enter your email address and we'll send you instructions to reset your password.
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
          <StyledTextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: 'text.secondary' }} />
                </InputAdornment>
              ),
            }}
          />
          <StyledButton
            type="submit"
            fullWidth
            variant="contained"
          >
            Send Reset Link
          </StyledButton>
          <Box sx={{ textAlign: 'center' }}>
            <StyledLink to="/login">
              Back to Sign In
            </StyledLink>
          </Box>
        </Box>
      </Paper>
    </ForgotContainer>
  );
}

export default ForgotPassword;