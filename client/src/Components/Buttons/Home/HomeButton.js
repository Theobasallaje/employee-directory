import * as React from "react";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors"

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF002E',
    },
  },
});

// const useStyles = makeStyles({
//   root: {
//     textDecoration: "none",
//     // float: "right",
//     margin: "0 0 0 80%",
//     position: "fixed",
//   },
//   shareSheetDesktop: {
//     bottom: "80px",
//     margin: "0 0 0 80%",
//     position: "fixed",
//     // border: '2px solid red',
//     width: "56px",
//     height: "186px",
//     display: "flex",
//     justifyContent: "center",
//   },
// });

export default function HomeButton() {
  // const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      {/* <Box className={classes.root}> */}
      {/* <Box> */}
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" startIcon={<HomeIcon />}>
            Home
          </Button>
        </Stack>
      {/* </Box> */}
    </ThemeProvider>
  );
}
