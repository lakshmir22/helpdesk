import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import TechSup from '/08931baadae9e9dd045c03785852646fe88be357.png';
import OpTeam from '/0528148a71745ae11ed88791636860157b80ffb7.png';

const Dashboard = () => {
  const userRole = localStorage.getItem('userRole');

  const stats = [
    { title: 'New Ticket', count: 12, color: 'bg-blue-500', textColor: 'text-white' },
    { title: 'Open Ticket', count: 8, color: 'bg-green-500', textColor: 'text-white' },
    { title: 'Ticket Awaiting Reply', count: 2, color: 'bg-red-500', textColor: 'text-white' },
    { title: 'Total in Progress', count: 2, color: 'bg-yellow-400', textColor: 'text-black' },
  ];

  const chartData = [
    { month: 'Jan', tickets: 20 },
    { month: 'Feb', tickets: 35 },
    { month: 'Mar', tickets: 45 },
    { month: 'Apr', tickets: 30 },
  ];

  const getPageTitle = () => {
    switch (userRole) {
      case 'technical':
        return 'Technical Support - Dashboard';
      case 'admin':
        return 'Admin - Dashboard';
      default:
        return 'Dashboard';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">{getPageTitle()}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className={`${stat.color} ${stat.textColor} shadow-lg`}>
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold mb-2">{stat.count}</div>
              <div className="text-lg font-medium">{stat.title}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-[#55D6C2] text-white">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Performance Chart</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Bar dataKey="tickets" fill="#1e40af" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#55D6C2] text-white">
          <CardContent className="p-6">
            <div className="grid grid-cols-2 gap-4 mb-4 relative">

              {/* Tech Support Image with specific CSS */}
              <div className="text-center">
  <div className="mb-2">
    <img
      src={TechSup}
      alt="Technical Support"
      style={{
        width: '105px',
        height: '153.6px',
        objectFit: 'contain',
        margin: '0 auto'
      }}
    />
  </div>
  <div className="text-2xl font-bold">3</div>
  <div className="text-sm">Technical Supports</div>
</div>


              {/* Operation Team Image */}
              <div className="text-center">
                <div className="text-2xl mb-2">
                  <img
                    src={OpTeam}
                    alt="Operation Team"
                    style={{
        width: '105px',
        height: '153.6px',
        objectFit: 'contain',
        margin: '0 auto'
      }}
                  />
                </div>
                <div className="text-2xl font-bold">4</div>
                <div className="text-sm">Operation Team</div>
              </div>
            </div>

            <Card className="bg-[#55D6C2] border-2 border-white">
              <CardContent className="p-4 text-center">
                <h4 className="font-semibold mb-2">Customer Feedback</h4>
                <div className="text-white text-xl mb-2">★★★★☆</div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
