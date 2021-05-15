import React, { Component } from "react";
import API from "../utils/API";
import NavBar from "./Nav";
import Buttons from "./Buttons";
import TableLayout from "./Table";
import FilterBar from "./FilterBar";

class Container extends Component {
  state = {
    search: "",
    results: [],
    employees: [],
  };

  // When this component mounts, search the Employee API for pictures of randomized Employees
  componentDidMount() {
    this.employeeGrab();
  }

  employeeGrab = () => {
    API.fetchEmployees()
      .then((res) => this.setState({ employees: res.data.results }))
      .catch((err) => console.log(err));
  };

  tableSort = (event) => {
    const grabColumn = event.target.getAttribute("data-handle");
    let columnSort = this.state.employees.map((e) => e);
    columnSort.sort((a, b) => {
      if (a[grabColumn] > b[grabColumn]) {
        return 1 * this.state[grabColumn];
      } else if (a[grabColumn] < b[grabColumn]) {
        return -1 * this.state[grabColumn];
      }
      return 0;
    });
    this.setState({
      employees: columnSort,
      [grabColumn]: this.state[grabColumn] * -1,
    });
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    const employeeAge = [...this.state.employees];
    console.log("Test");
    employeeAge.sort((a, b) => a.dob.age - b.dob.age);
    this.setState({ employees: employeeAge });
  };

  render() {
    return (
      <div>
        <NavBar />
        <Buttons
          // tableSort={this.tableSort}
          handleFormSubmit={this.handleFormSubmit}
        />
        <FilterBar
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <TableLayout
          search={this.state.search}
          employees={this.state.employees}
          handleFormSubmit={this.handleFormSubmit}
          // tableSort={this.tableSort}
        />
      </div>
    );
  }
}

export default Container;
