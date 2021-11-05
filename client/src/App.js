import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import AddEmployee from "./Components/Forms/AddEmployee/AddEmployee";
import EmployeePage from './Pages/EmployeePage/EmployeePage';

function App() {
  return (
    <div className="App">
      <Router>
          <Route path="/" exact component={Home} />
          <Route path="/add" exact component={AddEmployee} />
          <Route path="/add/:id" exact component={AddEmployee} />
          <Route path="/employee/:id" exact component={EmployeePage} />
        </Router>
    </div>
  );
}

export default App;
