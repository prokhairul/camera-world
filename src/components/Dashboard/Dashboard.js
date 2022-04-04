import React from 'react';
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';
import useRecharts from '../hooks/useRecharts';
import './Dashboard.css'


const Dashboard = () => {

    const [recharts] = useRecharts();

    return (
        <div className='charts-main'>
            <div className='compo-chart'>
                <h2>BarChart</h2>
            </div>

            <div className='chart-data' >
                <div className='chart-1'>
                    <BarChart width={730} height={250} data={recharts}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" fill="#8884d8" />
                        <Bar dataKey="sell" fill='#483d8b'></Bar>
                        <Bar dataKey="revenue" fill="#82ca9d" />
                    </BarChart>
                </div>

                <div className='compo-chart'>
                    <h2> ComposedChart </h2>
                </div>

                <div className='chart-2'>
                    <ComposedChart width={730} height={250} data={recharts}>
                        <XAxis dataKey="month" />
                        <YAxis dataKey={"revenue"} />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="sell" stroke="#a52a2a" />
                    </ComposedChart>
                </div>

            </div>

        </div>
    );
};

export default Dashboard;