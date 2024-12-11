import React from 'react';

const Entrada = ({ label, type, value, onChange, required }) => (
  <div className="mb-3">
    <label className="form-label">{label}</label>
    <input
      type={type}
      className="form-control"
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);

export default Entrada;
