import "./App.css";
import { Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        {/* without a logged in user and available for all once logged in */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contactus">
          <ContactUs />
        </Route>
        <Route path="*">
          <h1>404 path not found</h1>
          <h3>Try using the following paths:</h3>
        </Route>
        {/* student is logged in */}
        <Route path="/tutors">
          <Tutors />
        </Route>
        <Route path="/assignments">
          <Assignments />
        </Route>
        {/* tutor is logged in */}
        <Route path="/students">
          <Students />
        </Route>
        <Route path="/assignwork">
          <AssignWork />
        </Route>
        {/* parent is logged in */}
        <Route path="/tutors">
          <Tutors />
        </Route>
        <Route path="/children">
          <Students />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
