import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";
import "./App.css";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "../src/pages/homepage/HomePage";
import TeamPage from "../src/pages/teampage/TeamPage";

const App = () => (
  <Fragment>
    <Container maxWidth="lg">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/elenco" component={TeamPage} />
      </Switch>
      <Footer />
    </Container>
  </Fragment>
);

export default App;
