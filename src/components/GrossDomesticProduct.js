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
import { GrossDomesticProduct as data } from '../data/Data'
const addComma = (decimal, fixed = 0) => decimal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

const GrossDomesticProduct = () => (
  <div className="Chart">
    <h2>Gross Domestic Product</h2>
    <p>(in billions)</p>
    <ResponsiveContainer>
      <LineChart data={data} margin={{ top: 25, right: 30, left: 30, bottom: 25 }}>
        <XAxis dataKey="Date" />
        <YAxis
          yAxisId="left"
          dataKey="Metro"
          orientation="left"
          domain={[17600, 19400]}
          tickFormatter={addComma}
        />
        <YAxis
          yAxisId="right"
          dataKey="City"
          orientation="right"
          domain={[350, 395]}
          tickFormatter={addComma}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip formatter={addComma} />
        <Legend verticalAlign="top" height={36} />
        <Line type="monotone" yAxisId="left" dataKey="Metro" stroke="blue" name="United States" />
        <Line
          type="monotone"
          yAxisId="right"
          dataKey="City"
          stroke="orange"
          activeDot={{ r: 5 }}
          name="Maryland"
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
)

export default GrossDomesticProduct
