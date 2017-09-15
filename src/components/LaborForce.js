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
import { LaborForce as data } from '../data/Data'
const addComma = (decimal, fixed = 0) => {
  return decimal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
const LaborForce = () => (
  <div className="Chart">
    <h2>Labor Force & Employment</h2>
    <ResponsiveContainer>
      <LineChart data={data} margin={{ top: 25, right: 30, left: 30, bottom: 25 }}>
        <XAxis dataKey="Date" />
        <YAxis domain={[260000, 305000]} tickFormatter={addComma} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip formatter={addComma} />
        <Legend verticalAlign="top" height={36} />
        <Line type="monotone" dataKey="Labor" stroke="blue" name="Labor Force" />
        <Line type="monotone" dataKey="Total" stroke="orange" name="Total Employment" />
      </LineChart>
    </ResponsiveContainer>
  </div>
)

export default LaborForce
