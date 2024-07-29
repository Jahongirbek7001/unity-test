import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DataPoint {
    name: string;
    value1: number;
    value2: number;
}

const data: DataPoint[] = [
    { name: 'Graphics', value1: 100000, value2: 85000 },
    { name: 'Theme', value1: 75000, value2: 60000 },
    { name: 'Template', value1: 50000, value2: 40000 },
];

const CustomBarChart: React.FC = (z) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value1" fill="#8884d8" />
                <Bar dataKey="value2" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default CustomBarChart;
