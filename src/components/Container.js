import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";
import NavBar from "./Nav";
import Buttons from "./Buttons";
import TableLayout from "./Table";

class Container extends Component {
  state = {
    search: "",
    results: [],
    employees: [],
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchGiphy("kittens");
    this.employeeGrab();
  }

  searchGiphy = (query) => {
    API.search(query)
      .then((res) => this.setState({ results: res.data.data }))
      .catch((err) => console.log(err));
  };

  employeeGrab = () => {
    API.fetchEmployees()
      .then((res) => console.log(res))
      .then((res) => this.setState({ employees: res.data.results }))
      .catch((err) => console.log(err));
    //
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchGiphy(this.state.search);
  };

  render() {
    return (
      <div>
        {/* 
        I want to render the following:
        - hero/header - Create a component file and link above 
        - a table that can be sorted by either a button or a column heading selection - Create a component file and link above
        - a table with 10 employees from the API - Create a component file and link above
          - employees have at least 3-4 datapoints
        
        */}
        <NavBar />
        <Buttons />
        <TableLayout />
        {/* <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        /> */}
        {/* <ResultList results={this.state.results} /> */}
      </div>
    );
  }
}

export default Container;
