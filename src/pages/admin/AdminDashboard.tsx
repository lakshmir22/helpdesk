import React from 'react';

const barSVG = (
  <svg width="270" height="254" viewBox="0 0 270 254" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M185.344 18.2009C185.344 13.4052 187.112 8.80579 190.259 5.41466C193.406 2.02353 197.674 0.118408 202.125 0.118408H235.688C240.138 0.118408 244.407 2.02353 247.554 5.41466C250.701 8.80579 252.469 13.4052 252.469 18.2009V235.191H260.859C263.085 235.191 265.219 236.144 266.792 237.84C268.366 239.535 269.25 241.835 269.25 244.233C269.25 246.631 268.366 248.93 266.792 250.626C265.219 252.321 263.085 253.274 260.859 253.274H9.14062C6.91529 253.274 4.7811 252.321 3.20756 250.626C1.63401 248.93 0.75 246.631 0.75 244.233C0.75 241.835 1.63401 239.535 3.20756 237.84C4.7811 236.144 6.91529 235.191 9.14062 235.191H17.5312V180.944C17.5312 176.148 19.2993 171.549 22.4464 168.158C25.5935 164.766 29.8618 162.861 34.3125 162.861H67.875C72.3257 162.861 76.594 164.766 79.7411 168.158C82.8882 171.549 84.6562 176.148 84.6562 180.944V235.191H101.438V108.614C101.438 103.818 103.206 99.2185 106.353 95.8274C109.5 92.4362 113.768 90.5311 118.219 90.5311H151.781C156.232 90.5311 160.5 92.4362 163.647 95.8274C166.794 99.2185 168.562 103.818 168.562 108.614V235.191H185.344V18.2009ZM202.125 235.191H235.688V18.2009H202.125V235.191ZM151.781 235.191V108.614H118.219V235.191H151.781ZM67.875 235.191V180.944H34.3125V235.191H67.875Z" fill="#05386B"/>
  </svg>
);

const operatorSVG = (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" r="40" fill="#222" fillOpacity="0.05"/>
    <circle cx="40" cy="36" r="16" fill="#222"/>
    <rect x="20" y="56" width="40" height="12" rx="6" fill="#222"/>
    <rect x="30" y="60" width="20" height="8" rx="4" fill="#fff"/>
  </svg>
);

const operatorSVG2 = (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" r="40" fill="#222" fillOpacity="0.05"/>
    <circle cx="40" cy="36" r="16" fill="#222"/>
    <rect x="20" y="56" width="40" height="12" rx="6" fill="#222"/>
    <rect x="30" y="60" width="20" height="8" rx="4" fill="#fff"/>
    <rect x="60" y="60" width="8" height="8" rx="2" fill="#fff"/>
  </svg>
);

const starRow = (
  <div className="flex items-center justify-center">
    <svg width="32" height="32" fill="#FFD700" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
    <svg width="32" height="32" fill="#FFD700" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
    <svg width="32" height="32" fill="#FFD700" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
    <svg width="32" height="32" fill="#FFD700" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
    <svg width="32" height="32" fill="#E0E0E0" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
  </div>
);

const AdminDashboard = () => {
  return (
    <div className="w-full h-full bg-transparent px-0 pt-0" style={{ fontFamily: 'serif' }}>
      <h1 className="text-[2rem] font-bold mb-4 mt-0 ml-0 pl-0">Dashboard</h1>
      <div className="flex gap-6 mb-6 pl-12">
        <div className="bg-[#4f8ffb] rounded-xl flex flex-col items-center justify-center p-4" style={{ width: 200.25, height: 220.07, boxShadow: '6px 8px 0px 0px #D3D3D3' }}>
          <div className="text-xl font-medium mb-1">Total Tickets</div>
          <div className="text-[64px] font-light leading-none">12</div>
        </div>
        <div className="bg-[#1aff6b] rounded-xl flex flex-col items-center justify-center p-4" style={{ width: 200.25, height: 220.07, boxShadow: '6px 8px 0px 0px #D3D3D3' }}>
          <div className="text-xl font-medium mb-1">Total Solved</div>
          <div className="text-[64px] font-light leading-none">8</div>
        </div>
        <div className="bg-[#ff6b6b] rounded-xl flex flex-col items-center justify-center p-4" style={{ width: 200.25, height: 220.07, boxShadow: '6px 8px 0px 0px #D3D3D3' }}>
          <div className="text-xl font-medium mb-1">Total Awaiting Approval</div>
          <div className="text-[64px] font-light leading-none">2</div>
        </div>
        <div className="bg-[#fff86b] rounded-xl flex flex-col items-center justify-center p-4" style={{ width: 200.25, height: 220.07, boxShadow: '6px 8px 0px 0px #D3D3D3' }}>
          <div className="text-xl font-medium mb-1">Total in Progress</div>
          <div className="text-[64px] font-light leading-none">2</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-[#55d6c2] rounded-none flex items-center justify-center min-h-[250px] min-w-[300px]">{barSVG}</div>
        <div className="flex flex-col gap-4">
          <div className="bg-[#55d6c2] rounded-none flex w-full justify-around items-center min-h-[180px]">
            <div className="flex flex-col items-center">
              {operatorSVG}
              <div className="text-xl font-bold mt-2">3</div>
              <div className="text-base">Technical Supports</div>
            </div>
            <div className="flex flex-col items-center">
              {operatorSVG2}
              <div className="text-xl font-bold mt-2">4</div>
              <div className="text-base">Operation Team</div>
            </div>
          </div>
          <div className="bg-[#55d6c2] rounded-xl flex flex-col items-center justify-center py-4 w-full">
            <div className="text-xl font-serif font-medium mb-2">Customer Feedback</div>
            {starRow}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
