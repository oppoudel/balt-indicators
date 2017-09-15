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
import { AvgDaysOnMarket as data } from '../data/Data'

const AvgDaysOnMarket = () => (
  <div className="Chart">
    <h2>Average Days on Market</h2>
    <ResponsiveContainer>
      <LineChart data={data} margin={{ top: 25, right: 30, left: 30, bottom: 25 }}>
        <XAxis dataKey="Date" />
        <YAxis domain={[40, 100]} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend verticalAlign="top" height={36} />
        <Line type="monotone" dataKey="Metro" stroke="blue" name="Baltimore Metro Area" />
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

export default AvgDaysOnMarket
