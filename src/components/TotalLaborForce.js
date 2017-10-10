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
import { TotalLaborForce as data } from '../data/Data'

const addComma = (decimal, fixed = 0) => {
  return decimal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const TotalLaborForce = () => (
  <div className="Chart">
    <h2>Total Labor Force</h2>
    <ResponsiveContainer>
      <LineChart data={data} margin={{ top: 25, right: 50, left: 50, bottom: 25 }}>
        <XAxis dataKey="Date" />
        <YAxis
          yAxisId="left"
          dataKey="Maryland"
          orientation="left"
          tickFormatter={addComma}
          domain={[3060000, 3240000]}
        />
        <YAxis
          yAxisId="right"
          dataKey="City"
          orientation="right"
          tickFormatter={addComma}
          domain={[288000, 300000]}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip formatter={addComma} />
        <Legend verticalAlign="top" height={36} />
        <Line type="monotone" yAxisId="left" dataKey="Maryland" stroke="blue" name="Maryland" />
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

export default TotalLaborForce
