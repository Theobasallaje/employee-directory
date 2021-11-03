import React, { useEffect } from "react";
import { connect } from "react-redux";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import AppBar from "../../Components/AppBar/AppBar";
import Card from "../../Components/Card/Card";
import Search from "../../Components/Search/Search";
import { handleNavButton } from "../../actions";

const Item = styled(Card)(({ theme }) => ({
  ...theme.typography.body2,
  // padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Home(props) {
  useEffect(() => {
    props.handleNavButton("add");
  }, []);

  return (
    <div className="App">
      <AppBar navButton={"home"} />
      <Container
        sx={{ display: "flex", justifyContent: "center", marginBottom: 5 }}
      >
        <Search />
      </Container>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {Array.from(Array(60)).map((_, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Item>xs=2</Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
    navButton: state.buttons.navButton,
  });
  
  export default connect(mapStateToProps, {
    handleNavButton,
  })(Home);