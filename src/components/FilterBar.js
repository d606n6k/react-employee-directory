import React from "react";

function FilterBar(props) {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">
          Filter By Employee Name
        </span>
      </div>
      <input
        type="text"
        class="form-control"
        placeholder="Employee Name"
        aria-label="Emlpoyee Name"
        aria-describedby="basic-addon1"
      />
    </div>
  );
}

export default FilterBar;
