import React from 'react';
import Filter from './Filter';
import filterArray from './FilterList';

export default function FilterSection({  filterData, filters }) {
  return (
    <div className="filter-container">
      <h2>Filters</h2>
      {filterArray.map((filter, idx) => (
        <Filter
          key={idx}
          title={filter.title}
          data={filter.data}
          filterKey={filter.filterKey}
          filterData={filterData}
          value={filters[filter.filterKey]}
        />
      ))}
    </div>
  );
}
