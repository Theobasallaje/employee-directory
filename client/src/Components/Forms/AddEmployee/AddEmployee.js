import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  const [employee, setEmployee] = useState({});

  const redirect = () => {
    props.history.push("/");
  };

  useEffect(() => {
    props.handleNavButton("home");
  }, []);

  const handleSave = (e) => {
    console.log(employee);
    fetch("/api/employees", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        redirect();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (e) => {
    console.log(e.target.name);
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  // const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <AppBar navButton={"back"} />
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
            <InputLabel htmlFor="image">Image URL</InputLabel>
            <Input id="image" name="image" onChange={handleChange} />
          </FormControl>
          <FormControl sx={{ marginBottom: 5 }}>
            <InputLabel htmlFor="firstName">First Name</InputLabel>
            <Input id="firstName" name="firstName" onChange={handleChange} />
          </FormControl>
          <FormControl sx={{ marginBottom: 5 }}>
            <InputLabel htmlFor="lastName">Last Name</InputLabel>
            <Input id="lastName" name="lastName" onChange={handleChange} />
          </FormControl>
          <FormControl sx={{ marginBottom: 5 }}>
            <InputLabel htmlFor="title">Job Title</InputLabel>
            <Input id="title" name="title" onChange={handleChange} />
          </FormControl>
          <FormControl sx={{ marginBottom: 5 }}>
            <InputLabel htmlFor="department">Department</InputLabel>
            <Input id="department" name="department" onChange={handleChange} />
          </FormControl>
          <FormControl sx={{ marginBottom: 5 }}>
            <InputLabel htmlFor="email">Email address</InputLabel>
            <Input
              id="email"
              name="email"
              onChange={handleChange}
              aria-describedby="email-helper-text"
            />
            <FormHelperText id="email-helper-text">
              We'll never share your email.
            </FormHelperText>
          </FormControl>
          <FormControl sx={{ marginBottom: 5 }}>
            <InputLabel htmlFor="location">Location</InputLabel>
            <Input id="location" name="location" onChange={handleChange} />
          </FormControl>
          <SaveButton handleSave={handleSave} />
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
