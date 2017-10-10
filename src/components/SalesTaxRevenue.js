import React from 'react'
import { format } from 'd3'
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
import { SalesTaxRevenue as data } from '../data/Data'

const addDollor = (decimal, fixed = 0) => {
  const formatted = format('.2s')
  return '$' + formatted(decimal)
}

const SalesTaxRevenue = () => (
  <div className="Chart">
    <h2>Sales Tax Revenue</h2>
    <ResponsiveContainer>
      <LineChart data={data} margin={{ top: 25, right: 50, left: 50, bottom: 25 }}>
        <XAxis dataKey="Date" />
        <YAxis yAxisId="left" dataKey="Maryland" orientation="left" tickFormatter={addDollor} />
        <YAxis yAxisId="right" dataKey="City" orientation="right" tickFormatter={addDollor} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip formatter={addDollor} />
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

export default SalesTaxRevenue
