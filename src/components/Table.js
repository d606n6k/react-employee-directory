import React, { Component } from "react";
// import employees from "../employees.json";

function TableLayout(props) {
  const employees = props.employees;
  console.log(employees);
  const employeeResults = employees.map((employees) => {
    return (
      <tr>
        <th scope="col">
          <img src={employees.picture.thumbnail} /> {employees.name.first}{" "}
          {employees.name.last}
        </th>
        <th scope="col">{employees.email}</th>
        <th scope="col">{employees.phone}</th>
        <th scope="col">{employees.dob.age}</th>
      </tr>
    );
  });

  // onClick={props.tableSort}
  return (
    <table className="table">
      <thead>
        <tr>
          <th data-handle="name" scope="col">
            Name
          </th>
          <th data-handle="email" scope="col">
            Email
          </th>
          <th data-handle="phone" scope="col">
            Phone
          </th>
          <th data-handle="age" scope="col">
            Age
          </th>
        </tr>
      </thead>
      <tbody>{employeeResults}</tbody>
    </table>
  );
}

export default TableLayout;
