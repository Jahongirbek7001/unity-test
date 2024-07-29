import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface DataPoint {
    name: string;
    value: number;
}

interface Statistic {
    icon: string;
    label: string;
    value: string;
    color: string;
    slim: string;
}

const data: DataPoint[] = [
    { name: '1', value: 478 },
    { name: '2', value: 400 },
    { name: '3', value: 450 },
    { name: '4', value: 500 },
    { name: '5', value: 520 },
];

const statistics: Statistic[] = [
    { icon: '👥', label: 'Users', value: '36k', color: '#6A5ACD', slim: '50%' },
    { icon: '📈', label: 'Clicks', value: '1m', color: '#FF69B4', slim: '70%' },
    { icon: '💼', label: 'Sales', value: '327$', color: '#00BFFF', slim: '80%' },
    { icon: '🛍️', label: 'Items', value: '68', color: '#FFA500', slim: '30%' },
];


const PageViewsChart = () => {
    return (
        <>
            <div className=' bg-gray-50 rounded-3xl shadow-2xl mt-10 p-8'>
                <div>
                    <p className=' text-lg font-medium'>Active Users right now 💡</p>
                    <div className=' flex items-center p-4 rounded-lg gap-2'>
                        <div>
                            <div>
                                <p className=" text-6xl font-medium">478</p>
                                <div className=" flex justify-center items-center gap-3 my-7">
                                    <section className=" w-[32px] h-[32px]" style={{ backgroundColor: "rgba(255, 154, 123, 1)" }}>
                                        <img className=" w-[100px] h-[54px]" src="https://s3-alpha-sig.figma.com/img/0186/ed91/e1afa4e04eed5a779021dab837deb37c?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MYyw~lheeXT7Ge9MexlTA7Fs1AJ31gULkeo7awKxNgUk1sngLXtbk4ZLwF4-z1qFjmMIZJlzEn1hxieayLjmvk3czIHk1B~zfwha54JJ2JuE-kRF8S3aCncAOUHZrN0QygxnshBYsR2nrntxvIQqsVgRmIKNYnGqrAc-c7L-yKkEDBcUyexjZMc9DCJ9mnEnh3yoqCNbewzlYWoSmuEQYPYU8zHL1CPq-3mbZK2meKLQsgDZ2H5Qf~S1wyfdxaIBlDYdiLU~y9J~Nmgq-N9duaqApl0~KNzXe~ntrjUD7BoxP~49xUGEGdbPWrkDyeZy4bXvq2fCf4KKi7XX0Bk8qQ__" alt="" />
                                    </section>
                                    <p className=" text-sm text-indigo-500">Page views per minute</p>
                                </div>
                                <p className=" text-sm text-gray-500">Update your payout <br /> method in Settings</p>
                            </div>
                        </div>
                        <div className=' w-full h-[200px] p-5 bg-indigo-300 rounded-xl'>
                            <ResponsiveContainer>
                                <BarChart data={data}>
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="value" fill="#ffffff" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=' grid grid-cols-2 lg:grid-cols-4 my-5'>
                        {statistics.map((stat, index) => (
                            <div className=' flex p-4 gap-4 border-2 border-solid flex-col items-center'>
                                <div className=' flex justify-center items-center gap-2'>
                                    <div className=' text-xl'>{stat.icon}</div>
                                    <div className=' text-sm'>{stat.label}</div>
                                </div>
                                <div className=' text-4xl font-bold'>{stat.value}</div>
                                <div className=' w-full h-1 bg-gray-400'>
                                    <div className={`w-[${stat.slim}] h-1 rounded-sm mt-2 -translate-y-2`} style={{ backgroundColor: `${stat.color}` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>

    );
};

export default PageViewsChart;
