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
import { USConsumerConfidence as data } from '../data/Data'

const USConsumerConfidence = () => (
  <div className="Chart">
    <h2>U.S. Consumer Confidence</h2>
    <ResponsiveContainer>
      <LineChart data={data} margin={{ top: 25, right: 30, left: 30, bottom: 25 }}>
        <XAxis dataKey="Date" />
        <YAxis domain={[99.8, 101.4]} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend verticalAlign="top" height={36} />
        <Line type="monotone" dataKey="Metro" stroke="blue" name="United States" />
      </LineChart>
    </ResponsiveContainer>
  </div>
)

export default USConsumerConfidence
