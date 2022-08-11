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
    this.fetchContents = this.fetchContents.bind(this);
  }

  async componentDidMount() {
    this.fetchContents();
  }
  component;

  fetchContents() {
    let data;
    console.log("Fetching...");
    fetch("/api/post/")
      .then((response) => response.json())
      .then((data) => {
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
                  <Button color="primary" to="/post/" component={Link}>
                    Posts
                  </Button>
                  <Button color="secondary" to="/profile/" component={Link}>
                    Profiles
                  </Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Route>
          <Route exact path="/post/">
            <Grid container spacing={3}>
              <Grid item xs={12} align="center">
                <Typography variant="h5" compact="h3">
                  {this.state.content.map((detail) => (
                    <div class="postTitle">
                      <h1>{detail.title}</h1>
                      <div class="postContent">
                        <h2 >{detail.content}</h2>
                        <div class="postTime">
                          <h3 >{detail.created_at}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </Typography>
              </Grid>
            </Grid>
          </Route>
          <Route exact path="/profile/">
            <p>Hello</p>
          </Route>
        </Switch>
      </Router>
    );
  }
}
