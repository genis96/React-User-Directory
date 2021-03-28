import React, { Component } from "react";
import API from "../utils/API"
import SearchBar from "../components/searchBar"
import "../styles/employeeTable.css"
import DateFormat from 'dateformat';

class EmployeeTable extends Component {
    state = {
        search: "",
        results: []
    };
    // When the component mounts, get a list of names and update this.state.results
    componentDidMount() {
        API.searchApiEmployees()
        .then(res => { this.setState({ results: res.data.results }) 
        console.log(this.state.results)
        }).catch(err => console.log(err));
    }

    // handleInputChange function - for the input inside the search bar

    // handleInputChange function search for target.value

    // handleFormSubmit ,  preventDefault

    // render items 


}

export default EmployeeTable;