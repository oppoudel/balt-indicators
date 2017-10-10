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
import { TotalUnitsSold as data } from '../data/Data'

const addComma = (decimal, fixed = 0) =>
  decimal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

const UnitsSold = () => (
  <div className="Chart">
    <h3>Total Units Sold</h3>
    <ResponsiveContainer>
      <LineChart
        data={data}
        margin={{ top: 15, right: 30, left: 30, bottom: 25 }}
      >
        <XAxis dataKey="Date" />
        <YAxis
          yAxisId="left"
          dataKey="Metro"
          orientation="left"
          tickFormatter={addComma}
        />
        <YAxis
          yAxisId="right"
          dataKey="City"
          orientation="right"
          tickFormatter={addComma}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip formatter={addComma} />
        <Legend verticalAlign="top" height={36} />
        <Line
          type="monotone"
          yAxisId="left"
          dataKey="Metro"
          stroke="blue"
          name="Baltimore Metro Area"
        />
        <Line
          type="monotone"
          yAxisId="right"
          dataKey="City"
          stroke="orange"
          activeDot={{ r: 5 }}
          name="Baltimore City"
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
)

export default UnitsSold
