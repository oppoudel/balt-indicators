import React from 'react'
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import { BusinessEmployment as data } from '../data/Data'

const addComma = (decimal, fixed = 0) => {
  return decimal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const BusinessEmployment = () => (
  <div className="Chart">
    <h2>Business Establishments and Employment</h2>
    <ResponsiveContainer>
      <ComposedChart data={data} margin={{ top: 25, right: 50, left: 50, bottom: 25 }}>
        <XAxis dataKey="Quarter" />
        <YAxis
          yAxisId="left"
          dataKey="Number"
          orientation="left"
          tickFormatter={addComma}
          domain={[13000, 14000]}
        />
        <YAxis
          yAxisId="right"
          dataKey="Total"
          orientation="right"
          tickFormatter={addComma}
          domain={[290000, 350000]}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip formatter={addComma} />
        <Legend verticalAlign="top" height={36} />
        <Bar
          yAxisId="left"
          dataKey="Number"
          fill="Blue"
          name="Number of Business Units"
          barSize={75}
        />
        <Line
          type="monotone"
          yAxisId="right"
          dataKey="Total"
          stroke="orange"
          activeDot={{ r: 5 }}
          name="Total Employment by Place of Work"
        />
      </ComposedChart>
    </ResponsiveContainer>
  </div>
)

export default BusinessEmployment
