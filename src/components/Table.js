import React, { Component } from "react";
// import employees from "../employees.json";

function TableLayout({ employees }) {
  console.log(employees);
  const employeeResults = employees.map((employees) => {
    // cell: "63002861"
    // dob: {date: "1981-08-01T18:38:34.749Z", age: 40}
    // email: "signe.hansen@example.com"
    // gender: "female"
    // id: {name: "CPR", value: "010881-0902"}
    // location: {street: {…}, city: "Argerskov", state: "Nordjylland", country: "Denmark", postcode: 68777, …}
    // login: {uuid: "d2100f1a-ac08-4912-ac71-9fa05c0d4998", username: "bigmouse982", password: "hornet", salt: "YcFMfkjW", md5: "b7684e79d052404f50caa0a66c102bfc", …}
    // name: {title: "Miss", first: "Signe", last: "Hansen"}
    // nat: "DK"
    // phone: "70825555"
    // picture: {large: "https://randomuser.me/api/portraits/women/35.jpg", medium: "https://randomuser.me/api/portraits/med/women/35.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/35.jpg"}
    // registered: {date: "2002-08-30T00:39:38.185Z", age: 19}
    // __proto__: Object
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
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Age</th>
        </tr>
      </thead>
      <tbody>{employeeResults}</tbody>
    </table>
  );
}

export default TableLayout;
