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
  Box,
  Grid,
  CardContent,
  CardMedia,
  Card,
} from "@mui/material";
import AppBar from "../../Components/AppBar/AppBar";
import SaveButton from "../../Components/Forms/SaveButton/SaveButton";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";
import { handleNavButton, handleFormTitlePrefix } from "../../actions/index";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF002E",
    },
  },
});

function EmployeePage(props) {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();
  console.log(id);
  const redirect = () => {
    console.log("Redirect Ran!");
    props.history.push("/");
  };

  useEffect(() => {
    props.handleNavButton("home");
    if (id) {
      props.handleFormTitlePrefix("edit");
      console.log("set EDIT");
    } else {
      props.handleFormTitlePrefix("add");
    }

    if (props.formsPrefix === "edit") {
      console.log("ran fetch for specific employee");
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
          console.log(employee.number);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    return () => {
      props.handleFormTitlePrefix("add");
    };
  }, [props.formsPrefix]);

  return (
    <ThemeProvider theme={theme}>
      <AppBar navButton={"back"} />
      <Card>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <CardMedia
            component="img"
            sx={{ height: "80vh", width: '50vw' }}
            image={employee.image!==undefined && `${employee.image}`}
            alt="Employee Profile"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
                {`${employee.firstName} ${employee.lastName}`}
              </Typography>
              <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
                {employee.title}
              </Typography>
              <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
                {employee.number}
              </Typography>
              <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
                {employee.email}
              </Typography>
              <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
                {employee.department}
              </Typography>
              <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
                {employee.address}
              </Typography>
            </CardContent>
          </Box>
        </Box>
      </Card>
      {/* <Container
        maxWidth={"xs"}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // alignItems: "center",
          height: "50vh",
        }}
      >
        <Box style={{ display: "flex", justifyContent: "space-around" }}>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <img
                  style={{ width: "100%" }}
                  src={`${employee.image}`}
                  alt={"Employe Profile"}
                />
              </Grid>
              <Grid item xs={4}>
                
              </Grid>
            </Grid>
          </Box>
        </Box> */}
      {/* </Container> */}
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
})(EmployeePage);
