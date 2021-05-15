import React from "react";
// import TableLayout from "Table";

function Buttons(props) {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Welcome to your Employee Dashboard</h1>
          <p className="lead">
            Please use the button below to filter employees by{" "}
            <strong>Age</strong>
          </p>
          {/* <button
            type="button"
            onClick={props.tableSort}
            className="btn btn-secondary btn-lg ml-2"
          >
            Name
          </button>
          <button
            type="button"
            onClick={props.tableSort}
            className="btn btn-secondary btn-lg ml-2"
          >
            Email
          </button>
          <button
            type="button"
            onClick={props.tableSort}
            className="btn btn-secondary btn-lg ml-2"
          >
            Phone
          </button> */}
          <button
            type="button"
            onClick={props.handleFormSubmit}
            className="btn btn-secondary btn-lg ml-2"
          >
            Age
          </button>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
