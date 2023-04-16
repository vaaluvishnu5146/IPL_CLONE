import React from "react";

export default function BasicDropdown({
  label = "",
  id = "",
  handleChange = (e) => {},
  options = [],
  placeholder = "",
}) {
  return (
    <div class="mb-3">
      <label for={id} class="form-label">
        {label}
      </label>
      <select
        id={id}
        class="form-select form-select-md mb-3"
        aria-label=".form-select example"
        onChange={handleChange}
      >
        <option selected>{placeholder}</option>
        {options.map((_o, i) => (
          <option key={`${id}-option-${i}`} value={_o.id}>
            {_o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
