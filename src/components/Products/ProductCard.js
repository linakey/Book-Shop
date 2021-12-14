import { Grid, IconButton } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Shop } from "@material-ui/icons";
import MyLink from "../../shared/MyLink";
import { useProducts } from "../../contexts/ProductsContext";
import { checkItemInCart } from "../../utils/check-item-cart";

const useStyles = makeStyles({
  root: {
    maxWidth: "500px",
    
  },
  media: {
    height: 350,
    backgroundColor: "rgb(24, 22, 22);",
     
  
  
  },
  actions: {
    justifyContent: "space-between",
  },
  buttonCart: {
    color: "primary",
    backgroundColor: ""
  }
});

const ProductCard = ({ product, cart }) => {
  const classes = useStyles();
  const { addAndDeleteProductInCart } = useProducts();
  const isItemInCart = () => {
    if (cart) {
      return checkItemInCart(cart.products, product.id);
    }
    return false;
  };

  return (
    <Card className={classes.root}>
      <MyLink to={`/product/${product.id}`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={product.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.title}
            </Typography>
            {/* <Typography
              variant="body2"
              gutterBottom
              color="textSecondary"
              component="p"
            >
              {product.description}
            </Typography> */}
            <Typography variant="subtitle1" color="textPrimary" component="p">
              Price: {product.price} $
            </Typography>
            <Typography variant="subtitle1" color="textPrimary" component="p">
              Genre: {product.genre} 
            </Typography>
            <Typography variant="subtitle1" color="textPrimary" component="p">
             Author: {product.author} 
            </Typography>
          </CardContent>
        </CardActionArea>
      </MyLink>
      <CardActions className={classes.actions}>
        <IconButton color={isItemInCart() ? "secondary" : "primary"}>
          <ShoppingCartIcon />
        </IconButton>
        <Button className={classes.buttonCart}
          onClick={() => addAndDeleteProductInCart(product)}
          
          variant="contained"
          startIcon={<Shop />}
        >
         Add to Shopping Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
