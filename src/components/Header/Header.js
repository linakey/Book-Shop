 

 import React from "react";
 import { alpha, makeStyles } from "@material-ui/core/styles";
 import AppBar from "@material-ui/core/AppBar";
 import Toolbar from "@material-ui/core/Toolbar";
 import IconButton from "@material-ui/core/IconButton";
 import Typography from "@material-ui/core/Typography";
 import InputBase from "@material-ui/core/InputBase";
 import Badge from "@material-ui/core/Badge";
 import MenuItem from "@material-ui/core/MenuItem";
 import Menu from "@material-ui/core/Menu";
 import MenuIcon from "@material-ui/icons/Menu";
 import SearchIcon from "@material-ui/icons/Search";
 import AccountCircle from "@material-ui/icons/AccountCircle";
 import MailIcon from "@material-ui/icons/Mail";
 import NotificationsIcon from "@material-ui/icons/Notifications";
 import MoreIcon from "@material-ui/icons/MoreVert";
 import MyLink from "../../shared/MyLink";
 import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
 import { useProducts } from "../../contexts/ProductsContext";
 import Search from "./Search";
 import { Button, ClickAwayListener } from "@material-ui/core";
 import { useAuth } from "../../contexts/AuthContext";
import { red } from "@material-ui/core/colors";
 
 const useStyles = makeStyles((theme) => ({
   grow: {
     flexGrow: 1,
    
   },
   appbar: {
      backgroundColor: "rgb(209, 147, 13)"
       
   },
   menuButton: {
     marginRight: theme.spacing(2),
   },
   title: {
    fontSize: "30px",
    fontWeight: "bolder",
    fontFamily: [
      'BlinkMacSystemFont',
    ],
     [theme.breakpoints.up("sm")]: {
       display: "block",
     },
     "&:hover": {
      color: "white"
     },
     
    },
    addButton: {
      backgroundColor: "white",
      color: "black",
      fontSize: "16px",
      fontWeight: "450",
    
    },
    signUpButton:{
      backgroundColor: "white",
      color: "black",
      fontSize: "16px",
      fontWeight: "450",
    },
   search: {
     position: "relative",
     display: "flex",
     alignItems: "center",
     top: "10px",
     height: "50px",
     borderRadius: theme.shape.borderRadius,
     backgroundColor: alpha(theme.palette.common.white, 0.15),
     "&:hover": {
       backgroundColor: alpha(theme.palette.common.white, 0.25),
     },
     marginRight: theme.spacing(2),
     marginLeft: 0,
     width: "100%",
     [theme.breakpoints.up("sm")]: {
       marginLeft: theme.spacing(3),
       width: "auto",
     },
   },
   searchIcon: {
     padding: theme.spacing(0, 2),
     height: "50%",
     position: "absolute",
     pointerEvents: "none",
     display: "flex",
     alignItems: "center",
     justifyContent: "center",
   },
   inputRoot: {
     color: "inherit",
      
   },
   inputInput: {
     padding: theme.spacing(1, 1, 1, 0),
     // vertical padding + font size from searchIcon
     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
     transition: theme.transitions.create("width"),
     width: "90%",
     [theme.breakpoints.up("md")]: {
       width: "20ch",
     },
   },
   sectionDesktop: {
     display: "none",
     [theme.breakpoints.up("md")]: {
       display: "flex",
     },
   },
   sectionMobile: {
     display: "flex",
     
     [theme.breakpoints.up("md")]: {
       display: "none",
     },
   },
   searchBox: {
     
     position: "absolute",
     top: "20px",
    
     zIndex: 999,
   },
   shop: {
     display: "flex",
     alignItems: "center",
   },
 }));
 
 export default function Header() {
   const classes = useStyles();
   
 
   const [searchActive, setSearchActive] = React.useState(false);
 
   const { cartData, fetchSearchProducts } = useProducts(); // get length of cart
   const { registerUser, user, logOut } = useAuth(); // sign in with google
 
 
   const handleSearch = (e) => {
     fetchSearchProducts(e.target.value);
   };
 
 
   return (
     <div className={classes.grow}>
       <AppBar className={classes.appbar} position="relative" color="inherit">
         <Toolbar>
           
           <MyLink to="/">
             <Typography className={classes.title}   variant="overline" color="inherit"  > 
             BOOK SHOP
             </Typography>
           </MyLink>
          
 
           <div className={classes.grow} />
           <div className={classes.sectionDesktop}>
             <MyLink to="/add">
               <IconButton>
                 <Button className={classes.addButton} variant="outlined" size="large"   >
                   Add book
                 </Button>
               </IconButton>
             </MyLink>
             {/* <MyLink to="/register"> */}
             {user ? (
               <>
                 <p>{user.email}</p>
                 <IconButton onClick={() => logOut()}>
                   <Button variant="contained">Log out</Button>
                 </IconButton>
               </>
             ) : (
               <IconButton color="inherit">
                 <Button className={classes.signUpButton} onClick={() => registerUser()}  size="large" variant="outlined" color="inherit" >
                  Register
                 </Button>
               </IconButton>
             )}
 
             {/* </MyLink> */}
             <MyLink to="/cart" className={classes.shop}>
               <IconButton aria-label="show 2 new mails" color="inherit">
                 <Badge badgeContent={cartData} color="secondary">
                   <ShoppingCartIcon />
                 </Badge>
               </IconButton>
             </MyLink>
 
             <ClickAwayListener onClickAway={() => setSearchActive(false)}>
             <div className={classes.search}>
               <div className={classes.searchIcon}>
                 <SearchIcon />
               </div>
               <InputBase
                 onFocus={() => setSearchActive(true)}
                 placeholder="Search…"
                 classes={{
                   root: classes.inputRoot,
                   input: classes.inputInput,
                 }}
                 onChange={handleSearch}
                 inputProps={{ "aria-label": "search" }}
               />
               {searchActive && (
                 <div className={classes.searchBox}>
                   <Search />
                 </div>
               )}
             </div>
           </ClickAwayListener>
           </div>
         </Toolbar>
       </AppBar>
     </div>
   );
 }