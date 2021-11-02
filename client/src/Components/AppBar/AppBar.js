import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { styled } from '@mui/material/styles';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AddButton from "../Buttons/Add/AddButton";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

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
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'space-between'
}));

export default function ButtonAppBar() {
  // const classes = useStyles();
  return (
    // <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, marginBottom: 15 }}>
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
            <AddButton />
          </StyledToolbar>
        </AppBar>
      </Box>
    //</ThemeProvider>
  );
}
