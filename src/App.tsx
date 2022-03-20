import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Page404 } from "./components/Page404";
function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
