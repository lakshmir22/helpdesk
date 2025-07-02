
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const menuItems = [
  { icon: '📊', label: 'Dashboard', path: '/admin-dashboard' },
  { icon: '🗄️', label: 'Database', path: '/admin-database' },
  { icon: '⚙️', label: 'Setting', path: '/admin-settings' },
  { icon: '📋', label: 'User Log History', path: '/admin-user-log' },
  { icon: '👤', label: 'Profile', path: '/admin-profile' },
];

const AdminSidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-gray-100 min-h-screen border-r">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Admin Menu</h2>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors",
                location.pathname === item.path
                  ? "bg-blue-100 text-blue-700 font-medium"
                  : "text-gray-700 hover:bg-gray-200"
              )}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default AdminSidebar;
