import React from "react";

export function SearchBar(props) {
    return (
        <input
            type="text"
            placeholder="Search Here"
            onKeyUp={(event) => {
            props.filterFoods(event.target.value);
            }}
        />
    );
  }