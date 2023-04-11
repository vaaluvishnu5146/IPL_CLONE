import React from "react";

export default function TextField({
  id = "",
  label = "",
  placeholder = "",
  onChange = () => {},
  type = "",
}) {
  return (
    <div class="mb-3">
      <label for={id} class="form-label">
        {label}
      </label>
      <input
        type={type}
        className={`form-control ${type === "color" && "form-control-color"}`}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
