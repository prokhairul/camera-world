import React from 'react';
import useRecharts from '../hooks/useRecharts';
import './Dashboard.css'

const Dashboard = () => {
    const [recharts, setRecharts] = useRecharts();

    return (
        <div>
            <h3>Dashboard For Recharts: {recharts.length} </h3>
        </div>
    );
};

export default Dashboard;