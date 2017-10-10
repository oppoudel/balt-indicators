import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import { RoomInventory as data } from '../data/Data'

const toPercent = (decimal, fixed = 0) => {
  return decimal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '%'
}
const addComma = (decimal, fixed = 0) => {
  return decimal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const RoomOccupancy = () => (
  <div className="Chart">
    <h2>Hotel Room Inventory & Occupancy Rate</h2>
    <ResponsiveContainer>
      <LineChart data={data} margin={{ top: 25, right: 30, left: 30, bottom: 25 }}>
        <XAxis dataKey="Date" />
        <YAxis
          yAxisId="left"
          dataKey="Room"
          orientation="left"
          domain={[10200, 10650]}
          tickFormatter={addComma}
        />
        <YAxis
          yAxisId="right"
          dataKey="Occupancy"
          orientation="right"
          domain={[0, 100]}
          tickFormatter={toPercent}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend verticalAlign="top" height={36} />
        <Line
          type="monotone"
          yAxisId="right"
          dataKey="Occupancy"
          stroke="blue"
          name="Occupancy Rate"
        />
        <Line
          type="monotone"
          yAxisId="left"
          dataKey="Room"
          stroke="orange"
          activeDot={{ r: 5 }}
          name="Room Inventory"
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
)

export default RoomOccupancy
