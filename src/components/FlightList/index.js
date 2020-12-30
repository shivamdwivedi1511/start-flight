import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './starFlight.scss';
import { api } from '../../api';
import Head from '../Head';
import qs from 'query-string';
import Footer from './Footer';
import Loader from '../Loader';
import FilterSection from './FilterSection/FilterSection';
import ListingSection from './ListingSection/ListingSection';

const StarFlight = ({ history }) => {
  const queryString = useMemo(() => qs.parse(history.location.search), [
    history.location.search
  ]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ ...queryString });

  const getFlightData = useCallback(async () => {
    setFilters({ ...queryString });
    setLoading(true);
    const launchData = await api.flights.get(
      `?${new URLSearchParams({ ...queryString })}`
    );
    setData(launchData);
    setLoading(false);
  }, [queryString, setData, setLoading]);

  useEffect(() => {
    getFlightData();
  }, [getFlightData]);

  const filterData = (key, value) => {
    const query = { ...filters, [key]: value };
    history.push({
      pathname: '',
      search: `?${new URLSearchParams(query)}`
    });
  };

  return (
    <>
      <Head />
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <>
          <div className="container">
            <h1>SpaceX Launch Programs</h1>
            <div className="main-container">
              <FilterSection filterData={filterData} filters={filters} />
              <ListingSection data={data} />
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default StarFlight;
