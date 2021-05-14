import React, { Component } from "react";

function Buttons() {
  return (
    <div>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Welcome to your Employee Dashboard</h1>
          <p class="lead">
            Please use the buttons below to filter employees by{" "}
            <strong>Name</strong>, <strong>Email</strong>,<strong>Phone</strong>
            , and <strong>Birthday</strong>
          </p>
          <button type="button" class="btn btn-secondary btn-lg ml-2">
            Name
          </button>
          <button type="button" class="btn btn-secondary btn-lg ml-2">
            Email
          </button>
          <button type="button" class="btn btn-secondary btn-lg ml-2">
            Phone
          </button>
          <button type="button" class="btn btn-secondary btn-lg ml-2">
            Birthday
          </button>
        </div>
      </div>

      {/* <button type="button" class="btn btn-secondary btn-lg">Name</button> */}
    </div>
  );
}

export default Buttons;

// <button type="button" class="btn btn-secondary btn-lg">Large button</button>
