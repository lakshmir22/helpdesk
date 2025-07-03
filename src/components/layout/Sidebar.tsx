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
    <div className="w-58 min-h-screen border-r" style={{ background: '#C4C4C4' }}>
      <div className="p-7">
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center space-x-0 px-4 py-3 rounded-lg transition-colors relative",
                location.pathname === item.path
                  ? "text-black-00 font-medium"
                  : "text-gray-700 hover:bg-gray-200"
              )}
            >
              {location.pathname === item.path && (
                <span className="absolute -left-2 font-bold text-lg">{'>'}</span>
              )}
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
