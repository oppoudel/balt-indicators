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
import { VacancyRates as data } from '../data/Data'
const toPercent = (decimal, fixed = 0) => {
  return decimal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '%'
}
const VacancyRates = () => (
  <div className="Chart">
    <h2>Baltimore City Vacancy Rates</h2>
    <ResponsiveContainer>
      <LineChart data={data} margin={{ top: 25, right: 30, left: 30, bottom: 25 }}>
        <XAxis dataKey="Quarter" />
        <YAxis tickFormatter={toPercent} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip formatter={toPercent} />
        <Legend verticalAlign="top" height={36} />
        <Line type="monotone" dataKey="Office" stroke="blue" name="Office Vacancy Rate" />
        <Line type="monotone" dataKey="Industrial" stroke="orange" name="Industrial Vacancy Rate" />
        <Line type="monotone" dataKey="Retail" stroke="green" name="Retail Vacancy Rate" />
      </LineChart>
    </ResponsiveContainer>
  </div>
)

export default VacancyRates
