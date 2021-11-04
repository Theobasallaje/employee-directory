import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from './Pages/Home/Home'
import AddEmployee from "./Components/Forms/AddEmployee/AddEmployee";

function App() {
  return (
    <div className="App">
      <Router>
          <Route path="/" exact component={Home} />
          <Route path="/add" exact component={AddEmployee} />
          <Route path="/add/:id" exact component={AddEmployee} />
        </Router>
    </div>
  );
}

export default App;
