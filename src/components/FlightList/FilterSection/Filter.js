import React from 'react';
import { map, toLower } from 'lodash';
const Filter = ({ value, filterData, filterKey, title, data }) => {
  const clickHandler = val => {
    if (value === toLower(val)) val = '';
    filterData(filterKey, toLower(val));
  };

  return (
    <div className="filter-container-group">
      <h3>{title}</h3>
      <div className="filter-container-group-buttons">
        {map(data, (item, index) => {
          return (
            <button
              key={index}
              onClick={() => clickHandler(item)}
              className={value === toLower(item) ? 'active' : ''}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(Filter);
