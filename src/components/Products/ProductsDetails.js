import { Grid, Paper, makeStyles, Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useProducts } from "../../contexts/ProductsContext";
import MySpinner from "../../shared/MySpinner";
import {
  ImageWithZoom,
  Slider,
  CarouselProvider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { grey, lightGreen } from "@material-ui/core/colors";
import MyLink from "../../shared/MyLink";

const useStyles = makeStyles((theme) => ({
  custom_container: {
    marginTop: "0",
    alignItems: "center",
    // backgroundColor: "white"
    backgroundImage: `url(${"https://st4.depositphotos.com/3268541/20842/v/1600/depositphotos_208426456-stock-illustration-book-minimal-seamless-outline-pattern.jpg"})`,
  
  },
  paper: {
    height: "300px",
    width: "700px",
    padding: theme.spacing(1),
    color: "white",
    textAlign: "left",
    backgroundColor: "rgb(24, 22, 22);",
    minHeight: "400px",
    borderRadius: "40px"
  },
item: {
marginLeft: "30px",
 
},
 

  back:{
    height: "50px",
    width: "90px",
    color: "black",
    fontSize: "20px",
    fontFamily: "Roboto",
    fontWeight: "bold",
    backgroundColor:  "rgba(37, 159, 235, 0.911)",
    borderColor: "black",
    borderRadius: "50px",
    marginRight: "15px",
    marginLeft: "120px",
    marginTop: "15px",
   
  },
  next:{
    height: "50px",
    width: "90px",
    color: "black",
    fontSize: "20px",
    fontWeight: "bold",
    fontFamily: "Roboto",
    backgroundColor:  "rgba(37, 159, 235, 0.911)",
    borderColor: "black",
    borderRadius: "50px",
    marginRight: "15px",
  },
 buttons:{
   color: "white",
   backgroundColor: "black",
   margin: "10px",
   borderColor: "white",
   borderRadius: "30px"
 }

}));

const ProductsDetails = () => {
  const { fetchOneProduct, productDetails, deleteProduct } = useProducts();
  const { id } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    fetchOneProduct(id);
  }, [id]);

  const handleRedirectAfterDelete = () => {
    deleteProduct(id);
    navigate("/");
  };
  
  const classes = useStyles();
  return (
    <Grid container>
      {productDetails ? (
        <Grid container spacing={6} className={classes.custom_container}>
          <Grid  item md={4} className={classes.item}>
            <CarouselProvider
              naturalSlideWidth={2000}
              naturalSlideHeight={2020}
              totalSlides={3}
            >
              <Slider>
                <Slide backgroundColor="grey" index={0}>
                  <ImageWithZoom src={productDetails.image} />
                </Slide>
                <Slide index={1}>
                  <ImageWithZoom src={productDetails.image2} className={classes.img} />
                </Slide>
                <Slide index={2}>
                  <ImageWithZoom src={productDetails.image3} />
                </Slide>
              </Slider>
              <ButtonBack className={classes.back}>Back</ButtonBack>
              <ButtonNext className={classes.next}>Next</ButtonNext>
            </CarouselProvider>
          </Grid>
          <Grid item md={7}>
            <Paper elevation={8} className={classes.paper}>
              <table>
                <tbody>
                  <br />
                  <tr>
                    <th>Title:</th>
                    <td>{productDetails.title}</td>
                  </tr>
                  <br />
                  <tr>
                    <th>Author:</th>
                    <td>{productDetails.author}</td>
                  </tr>
                  <br />
                  <tr>
                    <th>Description:</th>
                    <td>{productDetails.description}</td>
                  </tr>
                  <br />
                  {productDetails.genre ? (
                    <tr>
                      <th> Genre:</th>
                      <td>{productDetails.genre}</td>
                    </tr>
                  ) : null}
                  <br />
                </tbody>
              </table>
            </Paper>
            <Button className={classes.buttons}
              onClick={() => handleRedirectAfterDelete(productDetails.id)}
              variant="contained"
              color="inherit"
            > Delete
            </Button>
              
            <Button className={classes.buttons}
            variant="contained"
              color="inherit">
             <MyLink to={`/edit/${productDetails.id}`}>

              Update
             </MyLink>
            
            </Button>
          </Grid>
        </Grid>
      ) : (
        <MySpinner />
      )}
    </Grid>
  );
};

export default ProductsDetails;

