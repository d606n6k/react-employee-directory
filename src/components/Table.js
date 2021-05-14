import React, { Component } from "react";

function TableLayout() {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Birthday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Marky Mark</td>
          <td>Marky@gmail.com</td>
          <td>1(619)123-1234</td>
          <td>02/1/1980</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Willy Wonka</td>
          <td>Wonks@wonkafactory.com</td>
          <td>1(619)123-1234</td>
          <td>5/12/1942</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Frodo Baggins</td>
          <td>potaters@lotr.com</td>
          <td>1(619)123-1234</td>
          <td>9/22/4094 BC</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TableLayout;
