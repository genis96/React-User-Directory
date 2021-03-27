import React from "react";
import "../styles/jumbotron.css"

function Jumbotron() {
    return (
    <div>
        <div className="jumbotron jumbotron-fluid" id="jumbotronId">
            <div className="container">
                <h1 className="display-3">Company Directory</h1>
                <p className="juboText">Search by employee name here</p>
            </div>
      </div>
    </div>
    );
  }

export default Jumbotron;
