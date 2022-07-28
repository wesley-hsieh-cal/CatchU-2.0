import React, { Component } from "react";
import { Grid, Button, ButtonGroup, Typography } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
    };
    this.fetchContents = this.fetchContents.bind(this)
  }

  componentWillMount(){
    this.fetchContents()
  }
  component

  fetchContents() {
    console.log("Fetching...")
    fetch("http://127.0.0.1:8000/post/")
      .then((response) => response.json())
      .then(data => {
        this.setState({
          content: data,
        });
      });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Grid container spacing={3}>
              <Grid item xs={12} align="center">
                <Typography variant="h3" compact="h3">
                  CatchU
                </Typography>
              </Grid>
              <Grid item xs={12} align="center">
                <ButtonGroup
                  disableElevation
                  variant="contained"
                  color="primary"
                >
                  <Button color="primary" to="/frontend/" component={Link}>
                    Posts
                  </Button>
                  <Button color="secondary" to="/profile/" component={Link}>
                    Profiles
                  </Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Route>
          <Route exact path="/frontend/">
            <p>Hello</p>
          </Route>
        </Switch>
      </Router>
    );
  }
}
