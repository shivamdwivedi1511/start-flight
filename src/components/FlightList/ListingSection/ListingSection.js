import { isEmpty, map } from 'lodash';
import React from 'react';
import Flight from './Flight';

export default function ListingSection({ data }) {
  return (
    <>
      {!isEmpty(data) && (
        <div className="flight-container">
          {map(data, (items, idx) => {
            return <Flight key={idx} item={items} />;
          })}
        </div>
      )}
      {isEmpty(data) && (
        <div className="flight-container">
          <h1>No Data Found !!</h1>
        </div>
      )}
    </>
  );
}
