import React, { Component } from "react";
import API from "../utils/API.js"
import "../styles/employeeTable.css"
import SearchBar from "../components/searchBar"
import DateFormat from 'dateformat'

class EmployeeTable extends Component {
    state = {
        search: "",
        results: [],
        order: ""
    }

    // When the component mounts, get a list of names and update this.state.results
    componentDidMount() {
        API.GetApi()
          .then(res => {this.setState({ results: res.data.results })
            console.log(this.state.results)
          }).catch(err => console.log(err))
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

    // first name 
    sortFirstName = () => {
        const sortEmployees = this.state.results.sort((x, y) => {
            if(y.name.first > x.name.first) {
                return -1
            }
            if(x.name.first > y.name.first) {
                return 1
            }
            return 0;
        });
        if(this.state.order === 'desc') {
            // reverses elems in array
            sortEmployees.reverse();
            this.setState({ order: 'asc' });
        } else {
            this.setState({ order: 'desc' });
        } 
        this.setState({ results: sortEmployees });
    }

    // last name 
    sortLastName = () => {
        const sortEmployees = this.state.results.sort((x, y) => {
            if(y.name.last > x.name.last) {
                return -1
            }
            if(x.name.last > y.name.last) {
                return 1
            }
            return 0;
        });
        if(this.state.order === 'desc') {
            // reverses elems in array
            sortEmployees.reverse();
            this.setState({ order: 'asc' });
        } else {
            this.setState({ order: 'desc' });
        } 
        this.setState({ results: sortEmployees });
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
                                <th>Firt Name <span onClick={this.sortFirstName} ></span></th>
                                <th>Last Name <span onClick={this.sortLastName} ></span></th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>DOB</th>
                            </tr>
                        </thead>

                            { this.state.results && this.state.results.map(item =>
                                item.name.first.toLowerCase().includes(this.state.search) ?
                                <tbody key={item.login.uuid}>
                                    <tr>
                                    <td ><img src={item.picture.thumbnail} className="rounded-circle" alt="thumbnail" /></td>
                                    <td >{item.name.first}</td>
                                    <td >{item.name.last}</td>
                                    <td >{item.phone}</td>
                                    <td >{item.email}</td>
                                    <td>{DateFormat(item.dob.date, "mediumDate")}</td>  
                                    </tr>
                                </tbody>
                            :
                                item.name.last.toLowerCase().includes(this.state.search) ?
                                <tbody key={item.login.uuid}>
                                <tr>
                                <td ><img src={item.picture.thumbnail} className="rounded-circle" alt="thumbnail" /></td>
                                    <td >{item.name.first}</td>
                                    <td >{item.name.last}</td>
                                    <td >{item.phone} </td>
                                    <td >{item.email}</td>
                                    <td>{DateFormat(item.dob.date, "mediumDate")}</td>  
                                </tr>
                                </tbody>
                            :
                                null
                        )}
                    </table>
                </div>
            </div>
        )
    }

}

export default EmployeeTable;