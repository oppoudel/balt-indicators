import React from 'react'
import {
  BarChart,
  Bar,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import { NetAbsorption as data } from '../data/Data'
const addComma = (decimal, fixed = 0) => {
  return decimal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const NetAbsorption = () => (
  <div className="Chart">
    <h2>Real Estate Market Net Absorption</h2>
    <ResponsiveContainer>
      <BarChart data={data} margin={{ top: 25, right: 30, left: 30, bottom: 25 }}>
        <XAxis dataKey="Quarter" />
        <YAxis tickFormatter={addComma} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip formatter={addComma} />
        <Legend verticalAlign="top" height={36} />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="Office" fill="blue" name="Office Net Absorption" />
        <Bar dataKey="Industrial" fill="orange" name="Industrial Net Absorption" />
        <Bar dataKey="Retail" fill="green" name="Retail Net Absorption" />
      </BarChart>
    </ResponsiveContainer>
  </div>
)

export default NetAbsorption
