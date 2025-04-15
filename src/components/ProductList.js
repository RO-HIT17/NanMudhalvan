import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import { CartContext } from '../CartContext';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  borderRadius: '12px',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 200,
  backgroundSize: 'contain',
  backgroundColor: '#f5f5f5',
  padding: theme.spacing(2),
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1.25rem',
  marginBottom: theme.spacing(1),
}));

const CardPrice = styled(Typography)(({ theme }) => ({
  color: theme.palette.success.main,
  fontWeight: 600,
  fontSize: '1.5rem',
  marginBottom: theme.spacing(2),
}));

const ViewDetailsButton = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing(1),
  backgroundColor: 'transparent',
  color: theme.palette.primary.main,
  borderColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
  },
}));

const AddToCartButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export const products = [
  { id: 1, name: 'Apple', price: 80.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFOr6r3T7sWdXHSO69hb_oaryV2RCF2OEo2g&s', description: 'Fresh and crispy apples' },
  { id: 2, name: 'Banana', price: 40.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvuFWmgStX6zF38A7ZufXtDXTlUag-rcKnew&s', description: 'Sweet and ripe bananas' },
  { id: 3, name: 'Orange', price: 60.00, image: 'https://i.pinimg.com/474x/bc/26/61/bc266157d205e3557c31efe4a24e392c.jpg', description: 'Juicy oranges full of vitamin C' },
  { id: 4, name: 'Grapes', price: 160.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSH71ghbltNLPy0lBFqdJD0w4oQMTtYw2SGw&s', description: 'Sweet and seedless grapes' },
  { id: 5, name: 'Mango', price: 280.00, image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/344928632/OW/RQ/XC/25352890/yellow-mango.jpeg', description: 'Sweet and aromatic mangoes' },
  { id: 6, name: 'Pineapple', price: 320.00, image: 'https://sahajaaharam.com/files/Sahaja%20Pineapplee0c8c6.jpeg', description: 'Tropical fresh pineapples' },
];

function ProductList() {
  const { addToCart } = useContext(CartContext);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: 'var(--primary-color)',
            mb: 2
          }}
        >
          Fresh Grocery Products
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
            color: 'text.secondary',
            maxWidth: '800px',
            margin: '0 auto'
          }}
        >
          Choose from our selection of high-quality fresh fruits and vegetables.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <StyledCard>
              <StyledCardMedia
                component="img"
                image={product.image}
                alt={product.name}
              />
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ mb: 3 }}>
                  <CardTitle variant="h6" component="h2">
                    {product.name}
                  </CardTitle>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {product.description}
                  </Typography>
                  <CardPrice variant="h6">
                    ₹{product.price.toFixed(2)}
                  </CardPrice>
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <ViewDetailsButton
                    variant="outlined"
                    component={Link}
                    to={`/product/${product.id}`}
                    startIcon={<InfoIcon />}
                  >
                    Details
                  </ViewDetailsButton>
                  <AddToCartButton
                    variant="contained"
                    onClick={() => addToCart(product)}
                    startIcon={<ShoppingCartIcon />}
                  >
                    Add to Cart
                  </AddToCartButton>
                </Box>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductList;