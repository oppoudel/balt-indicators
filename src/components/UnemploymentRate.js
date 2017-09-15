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
import { UnemploymentRate as data } from '../data/Data'
const toPercent = (decimal, fixed = 0) => {
  return decimal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '%'
}
const UnemploymentRate = () => (
  <div className="Chart">
    <h2>Unemployment Rate</h2>
    <ResponsiveContainer>
      <LineChart data={data} margin={{ top: 25, right: 30, left: 30, bottom: 25 }}>
        <XAxis dataKey="Date" />
        <YAxis domain={[3.0, 9.0]} tickFormatter={toPercent} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip formatter={toPercent} />
        <Legend verticalAlign="top" height={36} />
        <Line type="monotone" dataKey="US" stroke="blue" name="United States" />
        <Line type="monotone" dataKey="MD" stroke="orange" name="Maryland" />
        <Line type="monotone" dataKey="BC" stroke="red" name="Baltimore City" />
      </LineChart>
    </ResponsiveContainer>
  </div>
)

export default UnemploymentRate
