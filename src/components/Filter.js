import React from "react";

function Filter(props) {
  return (
    <select
      className="form-select form-select-lg mb-3"
      aria-label=".form-select-lg example"
      onChange={(e) => {
        if (e.target.value === "2") {
          props.sort(2);
        } else if (e.target.value === "1") {
          props.sort(1);
        }
        console.log(e.target.value);
      }}>
      <option selected>Sort By</option>
      <option value="1">Top Rated</option>
      <option value="2">By Name</option>
    </select>
  );
}

export default Filter;
