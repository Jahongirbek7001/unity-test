import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

interface DataPoint {
    name: string;
    value1: number;
    value2: number;
}

const data: DataPoint[] = [
    { name: 'Oct', value1: 10, value2: 20 },
    { name: 'Mar', value1: 30, value2: 35 },
    { name: 'Jul', value1: 42.5, value2: 30 },
    { name: 'Aug', value1: 25, value2: 15 },
];

const WaveChart: React.FC = () => {
    return (
        <ResponsiveContainer width="90%" height={200}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value1" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="value2" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default WaveChart;
