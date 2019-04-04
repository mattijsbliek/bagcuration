import React from 'react';

const Checkbox = ({ label }) => (
  <label className="checkbox">
    <input type="checkbox" />
    <b>{label}</b>
  </label>
);

export default Checkbox;
