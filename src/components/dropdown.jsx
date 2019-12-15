import React from "react";
import Select from "react-select";

function dropdown(props) {
  const hotels = props.hotels.map(s => s.neighbourhood);
  const hotelsList = [...new Set(hotels)];

  // Pure function to generate options from an array
  const optionValues = array => {
    return array.map(item => {
      return {
        value: item,
        label: item
      };
    });
  };
  const options = optionValues(hotelsList);

  function handleChange(e) {
    props.searchResults(e.value, "filter");
    console.log(e.value, "selectedOption");
  }

  return (
    <div className="dropdown-container">
      <Select
        className="dropdown"
        options={options}
        onChange={handleChange}
        placeholder="Neighbouhood"
      />
    </div>
  );
}

export default dropdown;
