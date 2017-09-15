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
import { ConsumerPriceIndex as data } from '../data/Data'

const UnitsSold = () => (
  <div className="Chart">
    <h2>Consumer Price Index</h2>
    <ResponsiveContainer>
      <LineChart data={data} margin={{ top: 25, right: 30, left: 30, bottom: 25 }}>
        <XAxis dataKey="Date" />
        <YAxis yAxisId="left" dataKey="Metro" orientation="left" domain={[232, 246]} />
        <YAxis yAxisId="right" dataKey="City" orientation="right" domain={[150, 162]} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend verticalAlign="top" height={36} />
        <Line
          type="monotone"
          yAxisId="left"
          dataKey="Metro"
          stroke="blue"
          name="U.S. City Average"
        />
        <Line
          type="monotone"
          yAxisId="right"
          dataKey="City"
          stroke="orange"
          activeDot={{ r: 5 }}
          name="Washington - Baltimore Region"
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
)

export default UnitsSold
