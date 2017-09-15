import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import { HotelRooms as data } from '../data/Data'
const addComma = (decimal, fixed = 0) => {
  return decimal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
const HotelRooms = () => (
  <div className="Chart">
    <h2>Baltimore City Hotel Room Inventory</h2>
    <ResponsiveContainer>
      <LineChart data={data} margin={{ top: 25, right: 30, left: 30, bottom: 25 }}>
        <XAxis dataKey="Date" />
        <YAxis domain={[10000, 10700]} tickFormatter={addComma} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip formatter={addComma} />
        <Line type="monotone" dataKey="Rooms" stroke="blue" name="Average Room Rate" />
      </LineChart>
    </ResponsiveContainer>
  </div>
)

export default HotelRooms
