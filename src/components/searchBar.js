import React from "react";
import "../styles/searchBar.css"

const SearchBar = (props) => {
    return (
        <form>
            <div className="form-inline">
                <div className="input-group mb-3">
                    <input 
                        className="form-control"
                        type="search"
                        placeholder="Search"
                        id="searchDir"
                        value={props.handleInputChange}
                        name="search"
                    />
                </div>
            </div>
        </form>
    );
}

export default SearchBar;
