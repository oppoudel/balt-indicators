import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import UnitsSold from './components/UnitsSold'
import AvgHomePrice from './components/AvgHomePrice'
import AvgDaysOnMarket from './components/AvgDaysOnMarket'
import ConsumerPriceIndex from './components/ConsumerPriceIndex'
import GrossDomesticProduct from './components/GrossDomesticProduct'
import USConsumerConfidence from './components/USConsumerConfidence'
import UnemploymentRate from './components/UnemploymentRate'
import LaborForce from './components/LaborForce'
import RoomOccupancy from './components/RoomInventory'
import AvgDailyRoomRate from './components/AvgDailyRoomRate'
import HotelRooms from './components/HotelRooms'
import SalesTaxRevenue from './components/SalesTaxRevenue'
import TotalLaborForce from './components/TotalLaborForce'
import VacancyRates from './components/VacancyRates'
import NetAbsorption from './components/NetAbsorption'
import BusinessEmployment from './components/BusinessEmployment'
import YearToDateRevenue from './components/YearToDateRevenue'
import 'semantic-ui-css/semantic.min.css'
import './App.css'

const App = () => (
  <div className="App">
    <Route exact path="/" component={HomePage} />
    <Route exact path="/unitssold" component={UnitsSold} />
    <Route exact path="/homeprice" component={AvgHomePrice} />
    <Route exact path="/daysmarket" component={AvgDaysOnMarket} />
    <Route exact path="/priceindex" component={ConsumerPriceIndex} />
    <Route exact path="/grossprod" component={GrossDomesticProduct} />
    <Route exact path="/consumer" component={USConsumerConfidence} />
    <Route exact path="/unemploy" component={UnemploymentRate} />
    <Route exact path="/labor" component={LaborForce} />
    <Route exact path="/room" component={RoomOccupancy} />
    <Route exact path="/rate" component={AvgDailyRoomRate} />
    <Route exact path="/hotel" component={HotelRooms} />
    <Route exact path="/salestax" component={SalesTaxRevenue} />
    <Route exact path="/totallabor" component={TotalLaborForce} />
    <Route exact path="/vacancy" component={VacancyRates} />
    <Route exact path="/absorption" component={NetAbsorption} />
    <Route exact path="/business" component={BusinessEmployment} />
    <Route exact path="/revenue" component={YearToDateRevenue} />
  </div>
)

export default App
