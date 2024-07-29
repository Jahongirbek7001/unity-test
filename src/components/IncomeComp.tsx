import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DataPoint {
    name: string;
    value1: number;
    value2: number;
}

const data: DataPoint[] = [
    { name: 'Graphics', value1: 60, value2: 50 },
    { name: 'Theme', value1: 45, value2: 35 },
    { name: 'Template', value1: 35, value2: 25 },
]

const IncomeComp: React.FC = () => {
    return (
        <div className=" text-white flex flex-col items-center my-5 bg-indigo-500 border-2 border-solid border-gray-200 rounded-2xl p-5 shadow-lg">
            <h3 className=" text-lg font-medium">Income</h3>
            <div className=" flex flex-col justify-center items-center bg-white rounded-xl  w-full h-[320px] mt-5">
                <ResponsiveContainer width="100%" height={250}>
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
                <button className=' text-white bg-black py-2 px-6 rounded-xl'>Withdraw Earning</button>
            </div>
        </div>
    );
}

export default IncomeComp;