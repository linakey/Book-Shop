import { Button, Grid, Paper } from "@material-ui/core";
import React, { useState } from "react";

import "./AddProduct.css";
import { useNavigate } from "react-router";
import { useProducts } from "../../contexts/ProductsContext";

const AddProduct = () => {
  const { addProduct } = useProducts();
  const [form, setForm] = useState({
    title: "",
    image: "",
    price: "",
    description: "",
    countInStock: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const values = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(values);
  };

  const addClothes = async () => {
    if (
      !form.title ||
      !form.image ||
      !form.price ||
      !form.description ||
     
      !form.countInStock
    ) {
      alert("fill all blanks");
      return;
    }
    await addProduct(form);
    // navigate("/");
  };
  //   console.log(form);
  return (
    <>
      <h1>Add new book</h1>
      <Grid container className="main" >
        <Grid item md={5}>
          <Paper elevation={5} className="paper" style={{backgroundColor: "grey", display:"flex", flexDirection:"column", justifyContent: "center"}}>
            <form className="inp"
            style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
              <input
                type="text"
                placeholder="Title"
                name="title"
                value={form.title}
                onChange={handleChange}
              />
              <textarea
                type="text"
                placeholder="Description"
                name="description"
                value={form.description}
                onChange={handleChange}
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
                placeholder="Count in stock"
                name="countInStock"
                onChange={handleChange}
                value={form.countInStock}
              />
            </form>
            <Button
            style={{width:"400px", margin: "10px auto"}}
              onClick={addClothes}
              variant="contained"
              color="inheit"
              className="btn-add"
            >
              Add new book
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default AddProduct;
