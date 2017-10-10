import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { AvgHomePrice as data } from '../data/Data'

const addComma = (decimal, fixed = 0) =>
  '$' +
  decimal
    .toFixed(fixed)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

const AvgHomePrice = () => (
  <div className="Chart">
    <h3>Average Home (Sales) Price</h3>
    <ResponsiveContainer>
      <LineChart
        data={data}
        margin={{ top: 25, right: 30, left: 30, bottom: 25 }}
      >
        <XAxis dataKey="Date" />
        <YAxis tickFormatter={addComma} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip formatter={addComma} />
        <Legend verticalAlign="top" height={36} />
        <Line
          type="monotone"
          dataKey="Metro"
          stroke="blue"
          name="Baltimore Metro Area"
        />
        <Line
          type="monotone"
          dataKey="City"
          stroke="orange"
          activeDot={{ r: 5 }}
          name="Baltimore City"
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
)

export default AvgHomePrice
