import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { CartContext } from '../../context/CartProvider';
import { useContext } from 'react';


export default function ProductCard({ product,key }) {
  
  const {addToCart} = useContext(CartContext)
  console.log({product});
  
  // const productData = {
  //   price: product.price,
  //   title: product.title

  // }
const userToken = localStorage.getItem('token');

  const sendToFavorites = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/favorite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${userToken}`,
        },
        body: JSON.stringify(product),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json(); // Assuming the server responds with JSON
      console.log('Success:', data);
      // Handle success, e.g., showing a success message
    } catch (error) {
      console.error('Error:', error);
      // Handle errors, e.g., showing an error message
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}

        </Typography>

        <Typography variant="body2" color="text.secondary">
          {product.desc}
        </Typography>

      </CardContent>
      <CardContent>

        <Typography variant="body2" color="text.secondary">
          Price: ${product.price}
        </Typography>
      </CardContent>

      <CardActions>


        <Button size="small" startIcon={<RemoveIcon />}></Button>
        <Button size="small">1</Button>
        <Button size="small" startIcon={<AddIcon />}></Button>
      </CardActions>
      <CardActions>
        <Button size="small" startIcon={<MonetizationOnIcon />} >Buy Now</Button>
        <Button size="small" defaultValue={product.productId} onClick={()=>{addToCart(product)}} startIcon={<ShoppingCartIcon />}>Add to Cart</Button>
        <Button size="small" startIcon={<FavoriteBorderIcon />} onClick={sendToFavorites} ></Button>

      </CardActions>

    </Card>
  );
}
