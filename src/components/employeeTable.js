import React, { Component } from "react";
import API from "../utils/API"
import SearchBar from "../components/searchBar"
import "../styles/employeeTable.css"
import DateFormat from 'dateformat';

class EmployeeTable extends Component {
    state = {
        search: "",
        results: [],
        order: ""
    };
    // When the component mounts, get a list of names and update this.state.results
    componentDidMount() {
        API.searchApiEmployees()
        .then(res => { this.setState({ results: res.data.results }) 
        console.log(this.state.results)
        }).catch(err => console.log(err));
    }

    // handleInputChange function - for the input inside the search bar,  function search for target.value
    handleInputChange = e => {
        if(e.target.name === 'search') {
            const searchName = e.target.value.toLowerCase();
            this.setState({ search: searchName })
        }
    }

    // handleFormSubmit
    handleFormSubmit = (e) => {
        e.preventDefault();
    }

    // render items - create the jsx/html for rendering - name, last name, phone, email, DOB and sort them out 
    render() {
        return (
            <div>
                <SearchBar handleInputChange={this.handleInputChange} 
                search={this.state.search} />

                <div className="table-responsive">
                    <table className="table table-responsive text-center table-striped">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Firt Name <span onClick={this.sortFirstName} className="downArrow"></span></th>
                                <th>Last Name <span onClick={this.sortLastName} className="downArrow"></span></th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>DOB</th>
                            </tr>
                        </thead>

                        
                    </table>
                </div>
            </div>
        )
    }

}

export default EmployeeTable;