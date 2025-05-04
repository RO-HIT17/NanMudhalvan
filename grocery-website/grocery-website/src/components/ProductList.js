import RecipeSearch from './RecipeSearch';
import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Slider } from '@mui/material';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import { CartContext } from '../CartContext';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  borderRadius: '20px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  border: '1px solid rgba(0, 0, 0, 0.05)',
  overflow: 'hidden',
  backgroundColor: '#fff',
  '&:hover': {
    transform: 'translateY(-12px) scale(1.02)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)'
  }
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
  color: 'var(--primary-color)',
  borderColor: 'var(--primary-color)',
  borderRadius: '50px',
  padding: '8px 20px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(46, 204, 113, 0.1)',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(46, 204, 113, 0.15)',
  },
}));

const AddToCartButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'var(--primary-color)',
  color: 'white',
  borderRadius: '50px',
  padding: '8px 20px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'var(--gradient-end)',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(46, 204, 113, 0.2)',
  },
}));

export const products = [
  { id: 1, name: 'Apple', price: 80.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFOr6r3T7sWdXHSO69hb_oaryV2RCF2OEo2g&s', description: 'Fresh and crispy apples', category: 'Fruits', calories: 95, protein: 0.3, carbs: 25, fat: 0.2 },
  { id: 2, name: 'Banana', price: 40.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvuFWmgStX6zF38A7ZufXtDXTlUag-rcKnew&s', description: 'Sweet and ripe bananas', category: 'Fruits', calories: 105, protein: 1.3, carbs: 27, fat: 0.4 },
  { id: 3, name: 'Orange', price: 60.00, image: 'https://i.pinimg.com/474x/bc/26/61/bc266157d205e3557c31efe4a24e392c.jpg', description: 'Juicy oranges full of vitamin C', category: 'Fruits', calories: 62, protein: 1.2, carbs: 15, fat: 0.2 },
  { id: 4, name: 'Grapes', price: 160.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSH71ghbltNLPy0lBFqdJD0w4oQMTtYw2SGw&s', description: 'Sweet and seedless grapes', category: 'Fruits', calories: 104, protein: 1.1, carbs: 27, fat: 0.2 },
  { id: 5, name: 'Mango', price: 280.00, image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/344928632/OW/RQ/XC/25352890/yellow-mango.jpeg', description: 'Sweet and aromatic mangoes', category: 'Fruits', calories: 202, protein: 1.4, carbs: 50, fat: 0.6 },
  { id: 6, name: 'Pineapple', price: 320.00, image: 'https://sahajaaharam.com/files/Sahaja%20Pineapplee0c8c6.jpeg', description: 'Tropical fresh pineapples', category: 'Fruits', calories: 82, protein: 0.9, carbs: 22, fat: 0.2 },
  { id: 7, name: 'Strawberry', price: 300.00, image: 'https://imgs.search.brave.com/6AYylZ-r_XWc0Pzg0MRSu769PedWoMdXJNrJLQ-H6Hg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDY0/NjQ2ODYwL3Bob3Rv/L2JhY2tncm91bmQt/ZnJvbS1mcmVzaGx5/LWhhcnZlc3RlZC1z/dHJhd2JlcnJpZXMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUg5VVFpdWwzZUhi/Nm0xQi1XV3h5WnZl/aDhvdnpQbmw1RTMy/V0dUTlFkWTg9', description: 'Fresh, sweet strawberries', category: 'Fruits', calories: 49, protein: 0.7, carbs: 12, fat: 0.3 },
  { id: 8, name: 'Watermelon', price: 40.00, image: 'https://imgs.search.brave.com/QIvN0UFrKOlhPiWanfBXD0BeVb-MO3agBU1ejc3agRg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM2/NzQ2ODQ1NC9waG90/by93YXRlcm1lbG9u/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1SZXduWDVqNDFw/NGx3dm1CM2ItZHhu/Uy1DOThmUUpVQnZF/TmliTEpjc3JBPQ', description: 'Refreshing and hydrating watermelon', category: 'Fruits', calories: 30, protein: 0.6, carbs: 8, fat: 0.2 },
  { id: 9, name: 'Papaya', price: 50.00, image: 'https://imgs.search.brave.com/kdBq0sVR-T8NjC3qPQmxdoi6CQv1KVTgwluWcdp9W8Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTE0/NjE3NTg0L3Bob3Rv/L3BhcGF5YS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9bEdQ/NldVSVBBbWwxTHZ4/eFo4dFR2RzhSb3BC/MHZuM3RKckZrMjl1/UWtYTT0', description: 'Sweet, ripe papayas for digestion', category: 'Fruits', calories: 59, protein: 0.6, carbs: 15, fat: 0.1 },
  { id: 10, name: 'Kiwi', price: 180.00, image: 'https://imgs.search.brave.com/1NdCvIvnraDKDRshIvwcxD8vPZkYPFxt7Vb2Niibfbw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTIx/ODU2NjQvcGhvdG8v/a2l3aS1mcnVpdC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/WW51OUlSYWMtWlB5/SUJNdHFvM1JJbHFE/SnE1M1JQRTNqM243/eE1BMy1VTT0', description: 'Tangy and healthy kiwi fruits', category: 'Fruits', calories: 48, protein: 0.8, carbs: 11, fat: 0.3 },
  { id: 11, name: 'Carrot', price: 60.00, image: 'https://imgs.search.brave.com/lSe5jrUGooEeTEUeYyIm2n-MsTt8JKt3FX-WAQnO0Xo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9waWxlLW9mLWNh/cnJvdHMuanBnP3c9/NjAwJnF1YWxpdHk9/ODA', description: 'Fresh and crispy carrots', category: 'Vegetables', calories: 41, protein: 0.9, carbs: 10, fat: 0.2 },
  { id: 12, name: 'Broccoli', price: 120.00, image: 'https://imgs.search.brave.com/E8RPK3KtOoszOjqUwGic5ULS7HCtGDKa26OQNk67Y2I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/NjQyMzU5L3Bob3Rv/L2Jyb2Njb2xpLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz05/cUJWUGRMZWIxZG1B/Rk9CV050cFFsdE5h/bDVLRUE4QS1JeGlU/dHowOWxjPQ', description: 'Healthy and green broccoli', category: 'Vegetables', calories: 55, protein: 3.7, carbs: 11, fat: 0.6 },
  { id: 13, name: 'Tomato', price: 40.00, image: 'https://imgs.search.brave.com/dSexMExTd30j3NsErrJNaVpA9unjJPBXL0Af35MmThk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTg5/OTg1MjM0L3Bob3Rv/L2hvbWVncm93bi10/b21hdG9lcy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9dXpV/aGZGc2Zlc1REQ2xS/UV8zUEFDQUFTNVNJ/YjhVUjFSeVU5RnFB/VkFjbz0', description: 'Red and juicy tomatoes', category: 'Vegetables', calories: 18, protein: 0.9, carbs: 4, fat: 0.2 },
  { id: 14, name: 'Potato', price: 30.00, image: 'https://imgs.search.brave.com/qRY1RM-sjgvkkCUzn3cMg5veN8BaPR03G4Vk6XS2FsU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTAx/NDYxODg4L3Bob3Rv/L3Jhdy1wb3RhdG8u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUdud0pzYmhheEls/aHd4bkJhQlZtXzVN/SFFlei03RFJkLUlp/VHc2UmlVYlE9', description: 'Versatile and starchy potatoes', category: 'Vegetables', calories: 161, protein: 4.3, carbs: 37, fat: 0.2 },
  { id: 15, name: 'Onion', price: 20.00, image: 'https://imgs.search.brave.com/JENI0PvQNSmIz1-MngTq9QilvB88INBE2TZwwJsOn78/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/Ni8wMi8wMS8zNS92/ZWdldGFibGVzLTE0/MzAwNjJfNjQwLmpw/Zw', description: 'Pungent and flavorful onions', category: 'Vegetables', calories: 40, protein: 1.1, carbs: 9, fat: 0.1 },
  { id: 16, name: 'Milk', price: 50.00, image: 'https://imgs.search.brave.com/a3OAXc9xf58MCNQYyJrAvU_G8R-VgbUbEYAFSz2a8zc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/OS8xMS8yMy8zNC9t/aWxrLWJvdHRsZS0y/NzQwODQ4XzY0MC5q/cGc', description: 'Fresh and creamy milk', category: 'Dairy', calories: 42, protein: 3.4, carbs: 5, fat: 1 },
  { id: 17, name: 'Cheese', price: 200.00, image: 'https://imgs.search.brave.com/RmICAdru-McSCbYF6qlK4YtdS9YMyKsDAzGBlLdX9lw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/MS8xMS8xOS81Ni9j/aGVlc2UtMTk3Mjc0/NF82NDAuanBn', description: 'Delicious and flavorful cheese', category: 'Dairy', calories: 403, protein: 25, carbs: 3, fat: 33 },
  { id: 18, name: 'Yogurt', price: 40.00, image: 'https://imgs.search.brave.com/LJbGUXsfNacaPubFHJah1fap-PBd9KPX9xuTjNwg-dY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg3/MDYwODEyL3Bob3Rv/L3lvZ3VydC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9Um90/Tll1aWhaZGI2WUMz/OWZIcHNKVW0xRmVW/aE1JZVRJSVZlN2RS/WU9VUT0', description: 'Healthy and probiotic yogurt', category: 'Dairy', calories: 61, protein: 3.5, carbs: 4.7, fat: 3.3 },
  { id: 19, name: 'Chips', price: 30.00, image: 'https://imgs.search.brave.com/-FSr762v5HKHnhttNV-ZI7NByCpqu1rl2RS7buHuhlY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQy/NTk4MTQ4MS9waG90/by/pbWFnZS1vZi1w/b3RhdG8tY2hpcHMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUIzTnpfTUg1VERR/ZG5DVzRUcVY1RER6/ZEZUaFZRTE5QdlF4/aEpxUmFYUEU9', description: 'Crispy and savory chips', category: 'Snacks', calories: 153, protein: 1.6, carbs: 14, fat: 10 },
  { id: 20, name: 'Chocolate', price: 80.00, image: 'https://imgs.search.brave.com/DIEWbK_ErbDqDzjhi2hJN8a_90NzQJxJPiKr-WVv-ng/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIx/MjgyOTU4L3Bob3Rv/L2Nob2NvbGF0ZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/MXhlSWd5WExDR21G/a0l2VzByVXZnbER2/aV8zQkJ1LU9zVXRZ/UlJsME9RVT0', description: 'Sweet and delicious chocolate', category: 'Snacks', calories: 539, protein: 4.9, carbs: 61, fat: 31 },
  { id: 21, name: 'Soda', price: 20.00, image: 'https://imgs.search.brave.com/SNfsIsPqOn3_6L4gleCImlNKsm-gYZWl-2KdqC85G4k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzEzLzc5Lzc3/LzM2MF9GXzExMzc5/Nzc0Ml8ySTVDaXVh/RXhtNVRlaEFEU0Zn/anZhR3FhSzYwajRn/Yi5qcGc', description: 'Refreshing and fizzy soda', category: 'Beverages', calories: 140, protein: 0, carbs: 39, fat: 0 },
  { id: 22, name: 'Juice', price: 40.00, image: 'https://imgs.search.brave.com/0EnRjzQDjWdbW1oTX5_Eep928ExqdLF2Fjw5z4wKyJc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzk1LzY3LzE4/LzM2MF9GXzI5NTY3/MTgwN180Q284aFpB/aGZ2eTQwaVFuSEMx/aDJIRFhKWjdvY1h5/Vy5qcGc', description: 'Healthy and refreshing juice', category: 'Beverages', calories: 110, protein: 1, carbs: 26, fat: 0 }
];

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

function ProductList() {
  const { addToCart } = useContext(CartContext);
  const [value, setValue] = React.useState(0);
  const [cartCounts, setCartCounts] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 300]); // Initial price range

  const handleRecipeSelect = (ingredients) => {
  };

    const handleAddToCart = (product) => {
    addToCart(product);
    setCartCounts(prevCounts => ({
      ...prevCounts,
      [product.id]: (prevCounts[product.id] || 0) + 1
    }));
  };

  const handleIncrement = (product) => {
    setCartCounts(prevCounts => ({
      ...prevCounts,
      [product.id]: (prevCounts[product.id] || 0) + 1
    }));
  };

  const handleDecrement = (product) => {
    setCartCounts(prevCounts => {
      const newCount = Math.max((prevCounts[product.id] || 0) - 1, 0);
      return {
        ...prevCounts,
        [product.id]: newCount,
      };
    });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getFilteredProducts = (category) => {
    let filteredProducts = products.filter(product => product.category === category)
      .filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(product =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
      );

    return filteredProducts;
  };

  const categories = ['Fruits', 'Vegetables', 'Dairy', 'Snacks', 'Beverages'];

  return (
    <Container maxWidth="lg" className="fade-in">
      <Box className="section">
       <RecipeSearch onRecipeSelect={() => {}} />
        <input
          type="text"
          placeholder="Search products..."
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '5px'
          }}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <Box sx={{ marginBottom: '20px' }}>
          <Typography id="range-slider" gutterBottom>
            Price range
          </Typography>
          <Box sx={{ width: 200 }}>
            <Slider
              value={priceRange}
              onChange={(event, newValue) => setPriceRange(newValue)}
              valueLabelDisplay="auto"
              min={0}
              max={300}
              aria-labelledby="range-slider"
            />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: -2 }}>
              <Typography variant="caption">Max: 300</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: -2 }}>
              <Typography variant="caption">Min: 0</Typography>
            </Box>
          </Box>
        </Box>
        {/* Placeholder for review filter */}
        <Typography variant="h3" className="section-title" component="h1">
          Fresh Grocery Products
        </Typography>
        <Typography
          variant="h6"
          component="p"
          align="center"
          sx={{
            color: 'text.secondary',
            maxWidth: '800px',
            margin: '0 auto 3rem',
            lineHeight: 1.6
          }}
          className="fade-in"
        >
          Choose from our selection of high-quality fresh fruits and vegetables.
        </Typography>

        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="product category tabs" centered>
            {categories.map((category, index) => (
              <Tab label={category} {...a11yProps(index)} key={category} />
            ))}
          </Tabs>
        </Box>

        {categories.map((category, index) => (
          <TabPanel value={value} index={index} key={category}>
          <Grid container spacing={4} sx={{ px: 2 }} alignItems="stretch" className="product-grid">
            {getFilteredProducts(category).map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id} sx={{ display: 'flex'}} >
                <StyledCard sx={{ width: '100%', minHeight: 450, display: 'flex', flexDirection: 'column' }}>
                  
                    <StyledCardMedia
                      component="img"
                      image={product.image}
                      alt={product.name}
                    />
                    <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
                      <Box sx={{ mb: 3, flex: 1 }}>
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

                      {/* ACTION BUTTONS FIXED */}
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: 1,
                          minHeight: '48px',
                        }}
                      >
                        <ViewDetailsButton
                          variant="outlined"
                          component={Link}
                          to={`/product/${product.id}`}
                          startIcon={<InfoIcon />}
                        >
                          Details
                        </ViewDetailsButton>

                        {cartCounts[product.id] > 0 ? (
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton onClick={() => handleDecrement(product)} size="small">
                              <RemoveIcon />
                            </IconButton>
                            <Typography variant="body1" sx={{ mx: 1 }}>
                              {cartCounts[product.id]}
                            </Typography>
                            <IconButton onClick={() => handleIncrement(product)} size="small">
                              <AddIcon />
                            </IconButton>
                          </Box>
                        ) : (
                          <AddToCartButton
                            variant="contained"
                            onClick={() => handleAddToCart(product)}
                            startIcon={<ShoppingCartIcon />}
                          >
                            Add to Cart
                          </AddToCartButton>
                        )}
                      </Box>
                    </CardContent>
                  </StyledCard>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
        ))}
      </Box>
    </Container>
  );
}
export default ProductList;