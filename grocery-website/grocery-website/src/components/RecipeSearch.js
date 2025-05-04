import { products } from './ProductList';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import React, { useState, useContext } from 'react';
import { TextField, List, ListItem, ListItemText, Button } from '@mui/material';
import { CartContext } from '../CartContext';

const recipes = [
  {
    name: 'Fruit Salad',
    ingredients: ['Apple', 'Banana', 'Mango', 'Strawberry', 'Kiwi'],
  },
  {
    name: 'Tropical Smoothie',
    ingredients: ['Pineapple', 'Mango', 'Banana', 'Milk', 'Yogurt'],
  },
  {
    name: 'Veggie Stir-Fry',
    ingredients: ['Carrot', 'Broccoli', 'Potato', 'Onion'],
  },
  {
    name: 'Tomato Cheese Sandwich',
    ingredients: ['Tomato', 'Cheese', 'Onion'],
  },
  {
    name: 'Papaya Yogurt Bowl',
    ingredients: ['Papaya', 'Yogurt', 'Strawberry'],
  },
  {
    name: 'Chocolate Banana Shake',
    ingredients: ['Banana', 'Milk', 'Chocolate'],
  },
  {
    name: 'Juicy Cooler',
    ingredients: ['Orange', 'Pineapple', 'Juice'],
  },
];


function RecipeSearch({ onRecipeSelect }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (term) {
      const results = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleRecipeSelect = (ingredients) => {
    onRecipeSelect(ingredients);
  };

  const [favoriteRecipes, setFavoriteRecipes] = useState(JSON.parse(localStorage.getItem('favoriteRecipes') || '[]'));

  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  }, [favoriteRecipes]);

  const handleFavoriteToggle = (recipeName) => {
    if (favoriteRecipes.includes(recipeName)) {
      setFavoriteRecipes(favoriteRecipes.filter((name) => name !== recipeName));
    } else {
      setFavoriteRecipes([...favoriteRecipes, recipeName]);
    }
  };

  return (
    <div>
      <TextField
        label="Search for recipes"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={handleSearch}
        style={{ marginBottom: '20px' }}
      />
      <List>
        {searchResults.map((recipe, index) => (
          <ListItem key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <ListItemText primary={recipe.name} secondary={recipe.ingredients.join(', ')} />
            <Box>
              <Button variant="contained" color="primary" onClick={() => handleRecipeSelect(recipe.ingredients)} style={{ marginRight: '8px' }}>
                Show Ingredients
              </Button>
              <Button
                variant="outlined"
                color={favoriteRecipes.includes(recipe.name) ? 'warning' : 'primary'}
                onClick={() => handleFavoriteToggle(recipe.name)}
              >
                {favoriteRecipes.includes(recipe.name) ? 'Unfavorite' : 'Favorite'}
              </Button>
            </Box>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default RecipeSearch;