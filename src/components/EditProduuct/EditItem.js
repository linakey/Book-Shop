import { Grid, Paper, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
 
import { blueGrey } from '@material-ui/core/colors';
import { useProducts } from "../../contexts/ProductsContext";

const EditItem = () => {
  const { productDetails, fetchOneProduct, editItem } = useProducts();
  console.log(productDetails);
  const [form, setForm] = useState({
    title: productDetails.title && productDetails.title,
    image: productDetails.image,
    image2: productDetails.image2,
    image3: productDetails.image3,
    price: productDetails.price,
    description: productDetails.description,
    author: productDetails.author,
    genre: productDetails.genre,
    countInStock: productDetails.countInStock,
  
  });

  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetchOneProduct(id);
  }, []);

  useEffect(() => {
    setForm({
      title: productDetails.title,
      image: productDetails.image,
      image2: productDetails.image2,
      image3: productDetails.image3,
      price: productDetails.price,
      description: productDetails.description,
      notes: productDetails.notes,
      category: productDetails.category,
    });
  }, [productDetails]);

  const handleChange = (e) => {
    const values = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(values);
  };

  const handleEdit = () => {
    editItem({ ...form, id });
    navigate("/");
  };
  return (
    <>
      <h1 align="center">Edit my book</h1>

      <Grid container className="main">
        <Grid item md={5}>
          <Paper className="paper">
            <form action="">
              <input
                type="text"
                placeholder="Title"
                name="title"
                onChange={handleChange}
                value={form.title}
              />
              <textarea
                type="text"
                placeholder="Descriptoin"
                name="description"
                onChange={handleChange}
                value={form.notes}
              />
              <input
                type="text"
                placeholder="Image"
                name="image"
                onChange={handleChange}
                value={form.image}
              />
              <input
                type="text"
                placeholder="Image2"
                name="image2"
                onChange={handleChange}
                value={form.image2}
              />
              <input
                type="text"
                placeholder="Image3"
                name="image3"
                onChange={handleChange}
                value={form.image3}
              />
              <input
                type="text"
                placeholder="Price"
                name="price"
                onChange={handleChange}
                value={form.price}
              />
              <input
                type="text"
                placeholder="Author"
                name="author"
                onChange={handleChange}
                value={form.author}
              />
              <input
                type="text"
                placeholder="Genre"
                name="genre"
                onChange={handleChange}
                value={form.genre}
              />
              <input
                type="text"
                placeholder="Count in Stock"
                name="count in stock"
                onChange={handleChange}
                value={form.countInStock}
              />
              <Button
                variant="contained"
                style={{backgroundColor: blueGrey[500], width:"400px", margin:"10px auto"}}
                className="btn-add"
                onClick={handleEdit}
              >
                Edit
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default EditItem;
