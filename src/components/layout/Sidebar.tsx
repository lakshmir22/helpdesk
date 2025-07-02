import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const menuItems = [
  { icon: '/image.png', label: 'Dashboard', path: '/dashboard' },
  { icon: '/tkt.png', label: 'My Ticket', path: '/my-tickets' },
  { icon: 'new_tkt.png', label: 'New Ticket', path: '/new-ticket' },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-gray-100 min-h-screen border-r">
      <div className="p-4">
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
              <img src={item.icon} alt={item.label} className="w-6 h-6" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
