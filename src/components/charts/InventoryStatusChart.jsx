import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { store: 'Store A', current: 85, optimal: 90, reorder: 50 },
  { store: 'Store B', current: 45, optimal: 80, reorder: 40 },
  { store: 'Store C', current: 92, optimal: 85, reorder: 45 },
  { store: 'Store D', current: 63, optimal: 75, reorder: 35 },
  { store: 'Store E', current: 78, optimal: 80, reorder: 40 },
];

const InventoryStatusChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="store" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="current" name="Current Stock %" fill="#1a73e8" />
        <Bar dataKey="optimal" name="Optimal Level %" fill="#0f9d58" />
        <Bar dataKey="reorder" name="Reorder Point %" fill="#f4b400" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default InventoryStatusChart;