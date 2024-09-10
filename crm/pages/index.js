import React, { useState, useEffect } from 'react';
import StatsCard from '../components/StatsCard';
import TimeSelector from '../components/TimeSelector';
import Charts from '../components/Charts';

const fetchData = async (timeWindow) => {
  // Dummy API call simulation based on timeWindow
  const response = await fetch(`/api/dummy-data?timeWindow=${timeWindow}`);
  const data = await response.json();
  return data;
};

export default function Home() {
  const [timeWindow, setTimeWindow] = useState('1 week');
  const [stats, setStats] = useState({});

  useEffect(() => {
    fetchData(timeWindow).then((data) => setStats(data));
  }, [timeWindow]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">CRM Statistics Dashboard</h1>
        
        {/* Time Selector */}
        <TimeSelector timeWindow={timeWindow} setTimeWindow={setTimeWindow} />
        
        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <StatsCard title="Total Sales" value={stats.sales || '0'} />
          <StatsCard title="New Customers" value={stats.customers || '0'} />
          <StatsCard title="Active Subscriptions" value={stats.subscriptions || '0'} />
        </div>

        {/* Charts Section */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Charts type="pie" data={stats.pieChartData} title="Sales Distribution" />
          <Charts type="bar" data={stats.barChartData} title="Revenue Over Time" />
        </div>
      </div>
    </div>
  );
}
