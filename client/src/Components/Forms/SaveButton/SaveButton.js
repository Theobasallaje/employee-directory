import * as React from "react";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
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

export default function SaveButton(props) {
  // const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      {/* <Box className={classes.root}> */}
      {/* <Box> */}
        <Stack direction="row" spacing={2}>
          <Button onClick={props.handleSave} variant="outlined" startIcon={<SaveIcon />}>
            Save
          </Button>
        </Stack>
      {/* </Box> */}
    </ThemeProvider>
  );
}
