import React from "react";
import Select from "react-select";

const Multiselector = () => {
  const options = [
    { value: "Joy", label: "Joy", color: "#FF8B00" },
    { value: "Roy", label: "Roy", color: "#36B37E" },
    { value: "Riaz", label: "Riaz", color: "#0052CC" },
    { value: "Basu", label: "Basu", color: "#33C0E1" },
    { value: "Ravi", label: "Ravi", color: "#fab048" },
  ];

  const handleChange = (selectdOption) => {
    console.log("handleChange", selectdOption);
  };

  const colorDesign = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return { ...styles, color: data.color };
    },
    multiValue: (styles, { data }) => {
      return { ...styles, backgroundColor: data.color, color: "#fff" };
    },
    multiValueLabel: (styles, { data }) => {
      return { ...styles, color: "#fff" };
    },
  };

  return (
    <div>
      <Select
        className="dropdown_field"
        isMulti
        options={options}
        onChange={handleChange}
        styles={colorDesign}
      />
    </div>
  );
};

export default Multiselector;
