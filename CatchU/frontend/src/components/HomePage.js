import React, { Component } from "react";
import { Grid, Button, ButtonGroup, Typography } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import axios from "axios";

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

    // fetch("/api/post/")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     this.setState({
    //       content: data,
    //     });
    //   });
    axios
      .get("/api/post/")
      .then((res) => {
        data = res.data;
        this.setState({
          content: data,
        });
      })
      .catch((err) => {});
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    
  };

  handleSumbit = (e) => {
    e.preventDefault();

    axios
      .post("/api/post/", {
        detail: this.state.content,
      })
      .then((res) => {
        this.setState({
          content: "",
        });
      })
      .catch((err) => {});
      
  };

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
                <Typography variant="h6" compact="h3">
                  <form onSubmit={this.handleSubmit} id="form">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          {" "}
                          Content{" "}
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Type..."
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={this.state.detail}
                        // name="content"
                        onChange={this.handleInput}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary mb-5">
                      Submit
                    </button>
                  </form>
                  {this.state.content.map((detail) => (
                    <div class="postTitle">
                      <h1>{detail.id}</h1>
                      <div class="postContent">
                        <h2>{detail.title}</h2>
                        <div class="postTime">
                          <h3>{detail.content}</h3>
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
