// import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom"

// export default class HomePage extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//         <Router>
//             <Switch>
//                 <Route exact path='/'>
//                     <p>This is the Home Page of CatchU</p>
//                 </Route>
//             </Switch>
//         </Router>);
//     }
// }

import React from "react";
import Navbar from "./navbar/index";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <p>This is the HomePage of CatchU ogogog</p>
    </div>
  );
};

export default HomePage;
