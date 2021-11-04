import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AddButton from "../Buttons/Add/AddButton";
import HomeButton from "../Buttons/Home/HomeButton";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { handleNavButton } from "../../actions/index";

// const theme = createTheme({
//   palette: {
//     // primary: {
//     //   main: grey[400],
//     // },
//     // primary: 'FF002E',
//     // secondary: grey,
//   },
// });

// const useStyles = makeStyles({
//   header: {
//     backgroundColor: "#FF002E",
//     color: "black",
//     // boxShadow: "0px 0px 0px 0px"
//   }
// });

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  // backgroundColor: "#FF002E",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "space-between",
}));

function NavBar({ navButton, handleNavButton, margin }) {
  // const classes = useStyles();
  return (
    // <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1, marginBottom: margin ? 25 : 15 }}>
      {/* <AppBar position="sticky" className={classes.header}> */}
      <AppBar position="fixed">
        <StyledToolbar>
          <img style={{width: 200}} src={`${process.env.PUBLIC_URL}/images/postlight-logo-1480-x-512.png`} alt={'PostLight Logo'}/>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              PostLight
            </Typography> */}
          {/* <Button color="inherit">Login</Button> */}
          {navButton === "add" ? (
            <Link
              style={{ textDecoration: "none" }}
              onClick={(e) => {
                // e.stopPropagation();
                handleNavButton("home");
              }}
              to="/add"
            >
              <AddButton />
            </Link>
          ) : (
            <Link
              style={{ textDecoration: "none" }}
              onClick={(e) => {
                // e.stopPropagation();
                handleNavButton("add");
              }}
              to="/"
            >
              <HomeButton />
            </Link>
          )}
        </StyledToolbar>
      </AppBar>
    </Box>
    //</ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  navButton: state.buttons.navButton,
});

export default connect(mapStateToProps, {
  handleNavButton,
})(NavBar);
