import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import ProductCard from "./ProductCard";

const useStyles = makeStyles((theme) => ({
cart: {
   
  color: "red"
}
}))
const ProductsList = ({ products }) => {
  const cart = JSON.parse(localStorage.getItem("cart")) ?? false;
  
  const classes = useStyles();
  return (
    <Grid container spacing={3} 
    >
      {products.map((product) => (
        <Grid item xs={4} key={product.id} className={classes.cart}>
          <ProductCard product={product} cart={cart} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsList;
