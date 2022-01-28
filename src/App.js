import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
// import ToDoOverview from "./components/ToDoOverview";

function App() {

  return (
    <Switch>
      <Route path="/" exact component={Homepage} />
    </Switch>
  );
}

export default App;
