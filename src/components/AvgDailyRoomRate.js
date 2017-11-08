import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { AvgDailyRoomRate as data } from '../data/Data';
const addSign = (decimal, fixed = 0) => {
  return '$' + decimal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
const AvgDailyRoomRate = () => (
  <div className="Chart">
    <h3>Baltimore City Average Daily Room Rate</h3>
    <ResponsiveContainer>
      <LineChart
        data={data}
        margin={{ top: 25, right: 30, left: 30, bottom: 25 }}
      >
        <XAxis dataKey="Date" />
        <YAxis domain={[50, 190]} tickFormatter={addSign} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip formatter={addSign} />
        <Line
          type="monotone"
          dataKey="Rate"
          stroke="blue"
          name="Average Room Rate"
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default AvgDailyRoomRate;
