import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <ol>
        <li>
          <Link to="/totallabor">Total Labor Force</Link>
        </li>
        <li>
          <Link to="/vacancy">Baltimore City Vacancy Rates</Link>
        </li>
        <li>
          <Link to="/absorption">Real Estate Market Net Absorption</Link>
        </li>
        <li>
          <Link to="/revenue">Year to End Sales Tax Revenue</Link>
        </li>

        <hr />
        <li>
          <Link to="/employ">Un/employment Data</Link>
        </li>
        <li>
          <Link to="/residential">Residential Real Estate</Link>
        </li>
        <li>
          <Link to="/indicators">National Indicators</Link>
        </li>
        <li>
          <Link to="/tourism">Tourism</Link>
        </li>
        <li>
          <Link to="/commercial">Commercial Real Estate</Link>
        </li>
        <li>
          <Link to="/salestax">Sales Tax Revenue</Link>
        </li>
      </ol>
    </div>
  );
};

export default HomePage;
