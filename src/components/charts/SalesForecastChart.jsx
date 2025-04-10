import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Mon', forecast: 4000, actual: 4200, previous: 3800 },
  { day: 'Tue', forecast: 4500, actual: 4300, previous: 4100 },
  { day: 'Wed', forecast: 5000, actual: 4800, previous: 4300 },
  { day: 'Thu', forecast: 4800, actual: 4600, previous: 4400 },
  { day: 'Fri', forecast: 5500, actual: 5200, previous: 4900 },
  { day: 'Sat', forecast: 6200, actual: 5800, previous: 5500 },
  { day: 'Sun', forecast: 5800, actual: 5500, previous: 5200 },
];

const SalesForecastChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="forecast" name="Forecasted Sales" stroke="#1a73e8" strokeWidth={2} />
        <Line type="monotone" dataKey="actual" name="Actual Sales" stroke="#0f9d58" strokeWidth={2} />
        <Line type="monotone" dataKey="previous" name="Previous Week" stroke="#f4b400" strokeDasharray="5 5" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesForecastChart;