import { MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import "./sorting.css";
function Sorting({ onChange, sortType }) {
  return (
    <div className="column">
      <span className="sort">Sort by: </span>
      <span className="filter">
        <TextField
          style={{ width: "200px", margin: "20px", marginLeft: "10px" }}
          select
          variant="outlined"
          label="Sort By"
          SelectProps={{
            value: sortType,
            onChange: (e) => onChange(e.target.value),
          }}
        >
          {/* <MenuItem value="">Sort By</MenuItem> */}
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="company">Company</MenuItem>
        </TextField>
      </span>
    </div>
  );
}

export default Sorting;
