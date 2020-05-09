import React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./sth/App";
import Anime from "./sth/Anime";
import Card from "./sth/Card";
// import App from './components/App';
import Home from "./sth/Home";
import DevilFruit from "./sth/DevilFruit";
import Characters from "./sth/Characters";
// import Anime from './components/Anime';
import Layout from "./sth/Layout";
import Header from "./sth/Header";
import Footer from "./sth/Footer";
// import Manga from "./sth/Manga";
import Games from "./sth/Games";
import Forums from "./sth/Forums";
// import Memory from "./sth/Memory";
import "./sth/style.css";
import * as serviceWorker from "./serviceWorker";

const root = (
  <BrowserRouter>
    <Route path='/' component={App} />
    <Route component={Layout}>
      <Route path='/Home' component={Home} />
      <Route path='/Anime' component={Anime} />
      <Route path='/Characters' component={Characters} />
      {/* <Route path='/Manga' component={Manga} /> */}
      <Route path='/DevilFruit' component={DevilFruit} />
      <Route path='/Games' component={Games} />
      <Route path='/Forums' component={Forums} />
      {/* <Route path='/Memory' component={Memory} /> */}
    </Route>
  </BrowserRouter>
  // </Router>
);

render(root, document.getElementById("root"));
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

serviceWorker.unregister();
