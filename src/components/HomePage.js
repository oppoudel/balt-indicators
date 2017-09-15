import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <ol>
        <li>
          <Link to="/unitssold"> Total Units Sold </Link>
        </li>
        <li>
          <Link to="/homeprice"> Average Home Price </Link>
        </li>
        <li>
          <Link to="/daysmarket"> Average Days on Market </Link>
        </li>
        <li>
          <Link to="/priceindex"> Consumer Price Index </Link>
        </li>
        <li>
          <Link to="/grossprod"> Gross Domestic Product </Link>
        </li>
        <li>
          <Link to="/consumer"> US Consumer Confidence </Link>
        </li>
        <li>
          <Link to="/unemploy"> Unemployment Rate </Link>
        </li>
        <li>
          <Link to="/labor"> Labor Force & Employment </Link>
        </li>
        <li>
          <Link to="/room"> Hotel Room Inventory & Occupancy Rate</Link>
        </li>
        <li>
          <Link to="/rate"> Average Daily Room Rate</Link>
        </li>
        <li>
          <Link to="/hotel">Baltimore City Hotel Room Inventory</Link>
        </li>
        <li>
          <Link to="/salestax">Sales Tax Revenue</Link>
        </li>
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
          <Link to="/business">Business Establishments and Employment</Link>
        </li>
        <li>
          <Link to="/revenue">Year to End Sales Tax Revenue</Link>
        </li>
      </ol>
    </div>
  )
}

export default HomePage
