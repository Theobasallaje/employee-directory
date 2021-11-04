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
import { handleNavButton, handleFormTitlePrefix } from "../../../actions";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF002E",
    },
  },
});

function AddEmployee(props) {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();
  console.log(id);
  const redirect = () => {
    console.log('Redirect Ran!');
    props.history.push("/");
  };

  useEffect(() => {
    props.handleNavButton("home");
    if (id) {
      props.handleFormTitlePrefix("edit");
      console.log('set EDIT');
    } else {
      props.handleFormTitlePrefix("add");
    }

    if (props.formsPrefix === 'edit') {
      console.log('ran fetch for specific employee');
      fetch(`/api/employees/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data[0]);
          setEmployee(data[0]);
          console.log(employee);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    return () => {
      props.handleFormTitlePrefix("add");
    }
  }, [props.formsPrefix]);

  const handleSave = (e) => {
    console.log(employee);
    console.log(props.formsPrefix);
    if (props.formsPrefix === 'add') {

      console.log('POST');
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
    } else {
      console.log('PUT');
      fetch(`/api/employees/${id}`, {
        method: "PUT", // or 'PUT'
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
    }
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
          {props.formsPrefix === 'add' ? 'Add' : 'Edit'} Employee
        </Typography>
        <FormGroup autoFocus='off'>
          <FormControl sx={{ marginBottom: 5 }}>
            <InputLabel htmlFor="image">{props.formsPrefix === 'add' && 'Image URL'}</InputLabel>
            <Input id="image" name="image" onChange={handleChange} value={employee.image} />
          </FormControl>
          <FormControl sx={{ marginBottom: 5 }}>
            <InputLabel htmlFor="firstName">{props.formsPrefix === 'add' && 'First Name'}</InputLabel>
            <Input id="firstName" name="firstName" onChange={handleChange} value={employee.firstName} />
          </FormControl>
          <FormControl sx={{ marginBottom: 5 }}>
            <InputLabel htmlFor="lastName">{props.formsPrefix === 'add' && 'Last Name'}</InputLabel>
            <Input id="lastName" name="lastName" onChange={handleChange} value={employee.lastName} />
          </FormControl>
          <FormControl sx={{ marginBottom: 5 }}>
            <InputLabel htmlFor="title">{props.formsPrefix === 'add' && 'Job Title'}</InputLabel>
            <Input id="title" name="title" onChange={handleChange} value={employee.title} />
          </FormControl>
          <FormControl sx={{ marginBottom: 5 }}>
            <InputLabel htmlFor="department">{props.formsPrefix === 'add' && 'Department'}</InputLabel>
            <Input id="department" name="department" onChange={handleChange} value={employee.department} />
          </FormControl>
          <FormControl sx={{ marginBottom: 5 }}>
            <InputLabel htmlFor="email">{props.formsPrefix === 'add' && 'Email address'}</InputLabel>
            <Input
              id="email"
              name="email"
              onChange={handleChange}
              aria-describedby="email-helper-text"
              value={employee.email}
            />
            <FormHelperText id="email-helper-text">
              We'll never share your email.
            </FormHelperText>
          </FormControl>
          <FormControl sx={{ marginBottom: 5 }}>
            <InputLabel htmlFor="location">{props.formsPrefix === 'add' && 'Location'}</InputLabel>
            <Input id="location" name="location" onChange={handleChange} value={employee.address}/>
          </FormControl>
          <SaveButton handleSave={handleSave} />
        </FormGroup>
      </Container>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  navButton: state.buttons.navButton,
  formsPrefix: state.forms.formTitle,
});

export default connect(mapStateToProps, {
  handleNavButton,
  handleFormTitlePrefix,
})(AddEmployee);
