import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const menuItems = [
  { icon: <img src="/image.png" alt="Dashboard" className="w-6 h-6" />, label: 'Dashboard', path: '/dashboard' },
  {
    icon: (
      <svg width="33" height="22" viewBox="0 0 33 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.33333 5.5166H25.6667V16.0166H7.33333V5.5166ZM30.25 10.7666C30.25 12.2164 31.4812 13.3916 33 13.3916V18.6416C33 20.0914 31.7688 21.2666 30.25 21.2666H2.75C1.2312 21.2666 0 20.0914 0 18.6416V13.3916C1.5188 13.3916 2.75 12.2164 2.75 10.7666C2.75 9.31684 1.5188 8.1416 0 8.1416V2.8916C0 1.44184 1.2312 0.266602 2.75 0.266602H30.25C31.7688 0.266602 33 1.44184 33 2.8916V8.1416C31.4812 8.1416 30.25 9.31684 30.25 10.7666ZM27.5 5.0791C27.5 4.35422 26.8844 3.7666 26.125 3.7666H6.875C6.1156 3.7666 5.5 4.35422 5.5 5.0791V16.4541C5.5 17.179 6.1156 17.7666 6.875 17.7666H26.125C26.8844 17.7666 27.5 17.179 27.5 16.4541V5.0791Z" fill="black"/>
      </svg>
    ),
    label: 'Ticket Approval',
    path: '/ticket-approval',
  },
  { icon: <img src="/tkt.png" alt="My Ticket" className="w-6 h-6" />, label: 'My Ticket', path: '/my-tickets' },
  {
    icon: (
      <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.0777 14.5785C21.9397 14.5785 21.8017 14.6978 21.6637 14.8171L21.3877 16.3675C20.9738 16.4868 20.5598 16.7253 20.2839 16.9639L18.628 16.3675C18.4901 16.3675 18.3521 16.3675 18.2141 16.4868L16.8342 18.5143C16.6962 18.6336 16.8342 18.7528 16.9722 18.8721L18.4901 19.8262V21.0189L16.9722 21.973C16.8342 22.0923 16.8342 22.2116 16.8342 22.3308L18.2141 24.3583C18.3521 24.4776 18.4901 24.4776 18.628 24.4776L20.2839 23.8813C20.6978 24.1198 20.9738 24.3583 21.3877 24.4776L21.6637 26.0281C21.6637 26.1473 21.8017 26.2666 22.0777 26.2666H24.8374C24.9754 26.2666 25.1134 26.1473 25.1134 26.0281L25.3893 24.4776C25.8033 24.3583 26.2172 24.1198 26.4932 23.8813L28.149 24.4776C28.287 24.4776 28.563 24.4776 28.563 24.3583L29.9428 22.3308C30.0808 22.2116 29.9428 22.0923 29.8049 21.973L28.287 21.0189V19.8262L29.8049 18.8721C29.9428 18.7528 29.9428 18.6336 29.9428 18.5143L28.563 16.4868C28.425 16.3675 28.287 16.3675 28.149 16.3675L26.6312 16.9639C26.2172 16.7253 25.9413 16.4868 25.3893 16.3675L25.1134 14.8171C25.1134 14.6978 24.9754 14.5785 24.8374 14.5785H22.0777ZM23.4575 18.7528C24.5614 18.7528 25.5273 19.5877 25.5273 20.5418C25.5273 21.496 24.5614 22.3308 23.4575 22.3308C22.3536 22.3308 21.3877 21.496 21.3877 20.5418C21.3877 19.5877 22.3536 18.7528 23.4575 18.7528ZM14.7644 24.1198H0L27.5971 0.266602V13.0281C26.3552 12.551 24.9754 12.1932 23.4575 12.1932C18.0761 12.1932 13.7985 15.8905 13.7985 20.5418C13.7985 21.8538 14.0745 23.0464 14.7644 24.1198Z" fill="black"/>
      </svg>
    ),
    label: 'Performance',
    path: '/performance',
  },
];

const OperationSidebar = () => {
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
              {item.icon}
              <span className="ml-2">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default OperationSidebar;
