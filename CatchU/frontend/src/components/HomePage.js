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
  state = {
    details: [],
    postTitle: "",
    postContent: "",
  };

  componentDidMount() {
    let data;

    axios
      .get("http://localhost:8000/api/post/")
      .then((res) => {
        data = res.data;
        this.setState({
          details: data,
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
      .post("http://localhost:8000/api/post/", {
        title: this.state.postTitle,
        content: this.state.postContent,
      })
      .then((res) => {
        this.setState({
          postTitle: "",
          postContent: "",
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
                  <form onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          {" "}
                          Title{" "}
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Type..."
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        defaultValue={this.state.postTitle}
                        name="postTitle"
                        onChange={this.handleInput}
                      />
                    </div>

                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">Content</span>
                      </div>
                      <textarea
                        className="form-control "
                        aria-label="With textarea"
                        placeholder="Type..."
                        defaultValue={this.state.postContent}
                        name="postContent"
                        onChange={this.handleInput}
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary mb-5">
                      Submit
                    </button>
                  </form>
                  {this.state.details.map((detail) => (
                    <div class="postTitle">
                      <h1>{detail.id}</h1>
                      <div class="postContent">
                        <h2>{detail.title}</h2>
                        <div class="postTime">
                          <h3>{detail.content}</h3>
                          <footer>
                            --- at
                            <cite>{detail.created_at}</cite>
                          </footer>
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
