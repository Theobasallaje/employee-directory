import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { handleEmployeeSearch } from "../../actions/index";

function CustomizedInputBase(props) {
  const [query, setQuery] = useState(""); //! change this to obj? or move fetch to home page
  const [employees, setEmployees] = useState([]); 

  const handleChange = (e) => {
    console.log(e.target.name);
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    fetch(`/api/employees/search/${query}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Success:", response);
        props.handleEmployeeSearch(response);
        // console.log(employee.number);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      // props.handleEmployeeSearch(employees);
  };

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search an Employee"
        inputProps={{ "aria-label": "Search an Employee by First Name" }}
        onChange={handleChange}
      />
      <IconButton
        onClick={handleSearch}
        type="submit"
        sx={{ p: "10px" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  handleEmployeeSearch,
})(CustomizedInputBase);
