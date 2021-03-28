import React from "react";
import './App.css';
import Jumbotron from './components/jumbotron'
import SearchBar from './components/searchBar'
import EmployeeTable from './components/employeeTable'


function App() {
  return (
    <div>
      <Jumbotron/>
      <SearchBar/>
      <EmployeeTable/>
    </div>
  );
}

export default App;
