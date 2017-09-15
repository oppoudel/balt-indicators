import React from 'react'
import { format } from 'd3'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import { YearToDateTax as data } from '../data/Data'

const formatted = x => {
  const formatSi = format('.2s')
  const s = formatSi(x)
  if (s[s.length - 1] === 'G') {
    return s.slice(0, -1) + 'B'
  } else return s
}

const addComma = (decimal, fixed = 0) => {
  const y = formatted(decimal.toFixed(2))
  return '$' + y
}

const YearToDateRevenue = () => (
  <div className="Chart">
    <h2>Sales Tax Revenue - Year-to-Date</h2>
    <ResponsiveContainer>
      <BarChart data={data} margin={{ top: 25, right: 50, left: 50, bottom: 25 }}>
        <XAxis dataKey="Year" />
        <YAxis tickFormatter={addComma} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip formatter={addComma} />
        <Legend verticalAlign="top" height={36} />
        <Bar dataKey="Rest" fill="Blue" stackId="a" name="Rest of Maryland" barSize={75} />
        <Bar dataKey="City" stackId="a" fill="Orange" name="Baltimore City" barSize={75} />
      </BarChart>
    </ResponsiveContainer>
  </div>
)

export default YearToDateRevenue
