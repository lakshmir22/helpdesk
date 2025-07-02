
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import AdminSidebar from './AdminSidebar';
import TechnicalSidebar from './TechnicalSidebar';
import OperationSidebar from './OperationSidebar';

const Layout = () => {
  const userRole = localStorage.getItem('userRole');

  const renderSidebar = () => {
    switch (userRole) {
      case 'admin':
        return <AdminSidebar />;
      case 'technical':
        return <TechnicalSidebar />;
      case 'operation':
        return <OperationSidebar />;
      default:
        return <Sidebar />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        {renderSidebar()}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
