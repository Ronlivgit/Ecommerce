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



export default function ProductCard({ product }) {
  console.log({product});
  


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
          { product.desc}
        </Typography>

      </CardContent>
      <CardContent>

        <Typography variant="body2" color="text.secondary">
          Price: ${product.price}
        </Typography>
      </CardContent>

      <CardActions>


        <Button size="small" startIcon={<RemoveIcon />}></Button>
        <Button size="small" >1</Button>
        <Button size="small" startIcon={<AddIcon />}></Button>
      </CardActions>
      <CardActions>
        <Button size="small" startIcon={<MonetizationOnIcon />} >Buy Now</Button>
        <Button size="small" startIcon={<ShoppingCartIcon />}>Add to Cart</Button>
        <Button size="small" startIcon={<FavoriteBorderIcon />}></Button>


      </CardActions>

    </Card>
  );
}
