import React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import App from "./components/App";
import Anime from "./components/Anime";
import Card from "./components/Card";
// import {
//   App,
//   Home,
//   Anime,
//   Characters,
//   Layout,
//   Manga,
//   DevilFruit,
//   Games,
//   Forums,
//   Memory,
// } from "./components/";
import "./components/style.css";
import * as serviceWorker from "./serviceWorker";

const root = (
  <Router history={browserHistory}>
    <Route path='/' component={App} />
    <Route component={Layout}>
      <Route path='/Home' component={Home} />
      <Route path='/Anime' component={Anime} />
      <Route path='/Characters' component={Characters} />
      <Route path='/Manga' component={Manga} />
      <Route path='/DevilFruit' component={DevilFruit} />
      <Route path='/Games' component={Games} />
      <Route path='/Forums' component={Forums} />
      <Route path='/Memory' component={Memory} />
    </Route>
  </Router>
);

render(root, document.getElementById("root"));
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

serviceWorker.unregister();
