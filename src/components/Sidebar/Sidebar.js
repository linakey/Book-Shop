import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  makeStyles,
  Paper,
} from "@material-ui/core";
import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { useProducts } from "../../contexts/ProductsContext";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "300px",
    padding: theme.spacing(2),
    backgroundColor: "rgb(209, 147, 13)",
    opacity: 0.73,
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  const [slider, setSlider] = useState([200, 15000]);

  const { fetchByParams } = useProducts();

  const handleSlider = (e, value) => {
    setSlider(value);
    // console.log(value)
  };
  const handleFilterPrice = () => {
    fetchByParams("price_lte", slider);
  };

  return (
    <Grid item md={3}>
      <Paper
        className={classes.root}
        // style={{
        //   backgroundImage: `url("https://images.theconversation.com/files/306448/original/file-20191211-95111-fbz9rf.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop")`,
        // }}
      >
        <Grid>
          <FormControl component="fieldset">
            <FormLabel component="label">Genre</FormLabel>
            <RadioGroup
              aria-label="size"
              name="size1"
              onChange={(e) => fetchByParams("genre", e.target.value)}
            >
              <FormControlLabel value="fantasy" control={<Radio />} label="fantasy" />
              <FormControlLabel value="romance" control={<Radio />} label="romance" />
              <FormControlLabel value="artistic fiction" control={<Radio />} label="artistic fiction" />
              <FormControlLabel value="children's literature" control={<Radio />} label="children's literature" />
              <FormControlLabel value="science fiction" control={<Radio />} label="science fiction" />
              <FormControlLabel value="detective" control={<Radio />} label="detective" />
              <FormControlLabel value="all" control={<Radio />} label="All" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid>
          <FormControl component="fieldset">
            <FormLabel component="label">Price</FormLabel>
            <RadioGroup
              aria-label="price"
              name="price1"
              onChange={(e) => fetchByParams("price_lte", e.target.value)}
            >
              <FormControlLabel
                value="40"
                control={<Radio />}
                label="up to 40"
              />
              <FormControlLabel
                value="50"
                control={<Radio />}
                label="up 50"
              />
              <FormControlLabel
                value="60"
                control={<Radio />}
                label="up to 60"
              />
              <FormControlLabel
                value="80"
                control={<Radio />}
                label="up to 80"
              />
             
              <FormControlLabel value="all" control={<Radio />} label="All" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid>
          <Slider
            min={200}
            max={20000}
            value={slider}
            onChangeCommitted={handleFilterPrice}
            onChange={handleSlider}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
          />
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Sidebar;
