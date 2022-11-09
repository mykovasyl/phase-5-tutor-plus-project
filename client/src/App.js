import "./App.css";
import { Switch, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import TutorList from "./TutorList";
import AssignmentsList from "./AssignmentsList";
import StudentList from "./StudentList";
import AssignWork from "./AssignWork";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        {/* without a logged in user and available for all once logged in */}
        <Route exact path="/">
          <Home />
        </Route>
        {/* student is logged in */}
        <Route path="/tutors">
          <TutorList />
        </Route>
        <Route path="/assignments">
          <AssignmentsList />
        </Route>
        {/* tutor is logged in */}
        <Route path="/students">
          <StudentList />
        </Route>
        <Route path="/assignwork">
          <AssignWork />
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
