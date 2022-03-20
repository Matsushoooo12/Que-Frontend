import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./components/Home";
import { Page404 } from "./components/Page404";
function App() {
  return (
    <ChakraProvider>
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
    </ChakraProvider>
  );
}

export default App;
