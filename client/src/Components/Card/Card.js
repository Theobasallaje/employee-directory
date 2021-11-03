import * as React from "react";
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

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

//   function example(…) {
//     return condition1 ? value1
//          : condition2 ? value2
//          : condition3 ? value3
//          : value4;
// }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={
          props.employee.firstName && props.employee.lastName ? `${props.employee.firstName} ${props.employee.lastName}`
          : props.employee.firstName ? `${props.employee.firstName}`
          : props.employee.lastName ? `${props.employee.lastName}`
          : 'Name Unknown'
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
            // call delete action/function
            console.log("Employee Deleted!");
          }}
        >
          <DeleteIcon />
        </IconButton>
        <Link
          style={{ textDecoration: "none" }}
          onClick={(e) => {
            // e.stopPropagation();
            // handleNavButton("home");
          }}
          to="/add"
        >
          <IconButton aria-label="share">
            <EditIcon />
          </IconButton>
        </Link>
      </CardActions>
    </Card>
  );
}
