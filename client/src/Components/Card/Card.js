import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { handleFormTitlePrefix } from "../../actions/index";

function employeeCard(props) {
  const handleDelete = () => {
    console.log(props.employee._id);
    fetch(`/api/employees/${props.employee._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Employee Deleted!");
        window.location.reload(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={
          props.employee.firstName && props.employee.lastName
            ? `${props.employee.firstName} ${props.employee.lastName}`
            : props.employee.firstName
            ? `${props.employee.firstName}`
            : props.employee.lastName
            ? `${props.employee.lastName}`
            : "Name Unknown"
        }
        subheader={props.employee.title}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.employee.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <p>{props.employee.number}</p>
          <p>{props.employee.email}</p>
          <p>{props.employee.department}</p>
          <p>{props.employee.address}</p>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="delete Employee"
          onClick={(e) => {
            e.preventDefault();
            handleDelete();
            console.log("Employee Deleted!");
          }}
        >
          <DeleteIcon />
        </IconButton>
        <Link
          style={{ textDecoration: "none" }}
          onClick={(e) => {
            console.log(props.employee._id);
            props.handleFormTitlePrefix("edit");
          }}
          to={`/add/${props.employee._id}`}
        >
          <IconButton aria-label="share">
            <EditIcon />
          </IconButton>
        </Link>
      </CardActions>
    </Card>
  );
}

const mapStateToProps = (state) => ({
  formsPrefix: state.forms.formTitlePrefix,
});

export default connect(mapStateToProps, {
  handleFormTitlePrefix,
})(employeeCard);
