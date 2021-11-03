import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  FormGroup,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  Container,
} from "@mui/material";
import AppBar from "../../AppBar/AppBar";
import SaveButton from "../SaveButton/SaveButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";
import { handleNavButton } from "../../../actions";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF002E",
    },
  },
});

function AddEmployee(props) {
  useEffect(() => {
    props.handleNavButton('home')
  }, []);

  // const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <AppBar navButton={'back'}/>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "85vh",
        }}
      >
        {/* <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}> */}
        <Typography variant="h3" component="div" sx={{ marginBottom: 5 }}>
          Add Employee
        </Typography>
        <FormGroup>
          <FormControl sx={{ marginBottom: 5 }}>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input id="name" />
          </FormControl>

          <FormControl sx={{ marginBottom: 5 }}>
            <InputLabel htmlFor="title">Job Title</InputLabel>
            <Input id="title" />
          </FormControl>
          <FormControl sx={{ marginBottom: 5 }}>
            <InputLabel htmlFor="department">Department</InputLabel>
            <Input id="department" />
          </FormControl>
          <FormControl sx={{ marginBottom: 5 }}>
            <InputLabel htmlFor="jobTitle">Email address</InputLabel>
            <Input id="jobTitle" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">
              We'll never share your email.
            </FormHelperText>
          </FormControl>
          <FormControl sx={{ marginBottom: 5 }}>
            <InputLabel htmlFor="dateStarted">Date Started</InputLabel>
            <Input id="dateStarted" />
          </FormControl>
          <SaveButton />
        </FormGroup>
      </Container>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  navButton: state.buttons.navButton,
});

export default connect(mapStateToProps, {
  handleNavButton,
})(AddEmployee);