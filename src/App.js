import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Home from "../src/pages/Home";
import SearchListings from "../src/pages/SearchListing";
import Footer from "./components/Footer";
import ListingDetails from "./pages/ListingDetails";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={SearchListings} exact path="/SearchListings" />
          <Route component={ListingDetails} exact path="/ListingDetails" />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
