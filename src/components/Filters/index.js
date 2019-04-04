import React from 'react';
import Dot from 'components/Dot';

const colors = [
  'black',
  'blue',
  'brown',
  'green',
  'purple',
  'red',
  'white',
  'yellow',
];

const Filters = () => (
  <div className="filters">
    <label htmlFor="filter-search">Search</label>
    <input placeholder="Brand or product name" name="filter-search" />

    <p className="label">Price</p>
    <ul>
      <li>
        <Checkbox label="up to $100" />
      </li>
      <li>
        <Checkbox label="$100 - $300" />
      </li>
      <li>
        <Checkbox label="$300+" />
      </li>
    </ul>

    <p className="label">Laptop pocket</p>
    <ul>
      <li>
        <Checkbox label="None" />
      </li>
      <li>
        <Checkbox label="13 inch" />
      </li>
      <li>
        <Checkbox label="15 inch" />
      </li>
    </ul>

    <p className="label">Color</p>
    <ul>
      {colors.map(color => (
        <li>
          <Checkbox
            label={
              <>
                <Dot color={color} /> {capitalize(color)}
              </>
            }
            textAlign="left"
          />
        </li>
      ))}
    </ul>
  </div>
);

export default Filters;
