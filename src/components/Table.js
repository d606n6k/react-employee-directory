import React, { Component } from "react";

function TableLayout(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="custom-thead" data-handle="name" scope="col">
            Name
          </th>
          <th className="custom-thead" data-handle="email" scope="col">
            Email
          </th>
          <th className="custom-thead" data-handle="phone" scope="col">
            Phone
          </th>
          <th className="custom-thead" data-handle="age" scope="col">
            Age
          </th>
        </tr>
      </thead>
      {/* <tbody>{employeeResults}</tbody> */}
      <tbody>
        {props.employees
          ?.filter((employee) =>
            `${employee.name.first} ${employee.name.last}`
              .toUpperCase()
              .includes(props.search.toUpperCase())
          )
          .map((employee, i) => (
            <tr>
              <th scope="row">
                <img src={employee.picture.medium} alt={"employee" + i}></img>
              </th>
              <td>{`${employee.name.first} ${employee.name.last}`}</td>
              <td>{employee.cell}</td>
              <td>{employee.email}</td>
              <td>{new Date(employee.dob.date).toLocaleDateString()}</td>
              <td>{employee.dob.age}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default TableLayout;
