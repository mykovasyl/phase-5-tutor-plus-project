import "./App.css";
import { Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
// import TutorList from "./TutorList";
// import AssignmentsList from "./AssignmentsList";
import Students from "./Students";
import AssignWork from "./AssignWork";
import AssignmentsList from "./AssignmentsList";
import SignUp from "./SignUp";

function App() {
  const [assignments, setAssignments] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // fetch request for tutors with student array
    // set state to tutors fetched
  });

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* student is logged in */}
        {/* <Route path="/tutors">
          <TutorList />
        </Route>
        <Route path="/assignments">
          <AssignmentsList />
        </Route> */}
        {/* tutor is logged in */}
        <Route path="/students">
          <Students students={students} setStudents={setStudents} />
        </Route>
        <Route path="/assignwork">
          <AssignWork />
        </Route>
        <Route path="/assignments">
          <AssignmentsList />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="*">
          <h1>404 path not found</h1>
          <h3>Try using the following paths:</h3>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
