import React from 'react';

const renderStars = (count = 5) => (
  <span className="ml-2">
    {[...Array(5)].map((_, i) => (
      <span key={i} style={{ color: '#FFD600', fontSize: 24, marginRight: 2 }}>★</span>
    ))}
  </span>
);

const Performance = () => {
  return (
    <div className="w-full min-h-screen bg-white px-8 pt-4" style={{ fontFamily: 'serif' }}>
      <div className="text-3xl font-normal text-left mb-6">Performance</div>
      <div className="flex flex-row items-start justify-between">
        {/* Left Section */}
        <div className="flex flex-col" style={{ minWidth: 600 }}>
          <div className="flex flex-row items-start mb-4" style={{ minWidth: 600 }}>
            <div className="w-60 h-28 rounded-xl bg-[#D9D9D9] flex items-center justify-center mr-4">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="#222"><circle cx="12" cy="8" r="4"/><path d="M12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z"/></svg>
            </div>
            <div className="flex flex-col justify-start" style={{ height: '112px' }}>
              <span className="text-2xl font-normal mb-2">Operation Name</span>
              <div className="rounded-2xl bg-[#D9D9D9] px-8 py-3 text-lg flex items-center" style={{ minWidth: 340, height: '72px' }}>
                <div>
                  Contact No: 0123456789<br />Department: ABC
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-[#D9D9D9] px-8 py-6 text-lg" style={{ minWidth: 440 }}>
            <div className="flex flex-row justify-between mb-2">
              <span>Total Ticket Handle</span>
              <span>5</span>
            </div>
            <div className="flex flex-row justify-between mb-2">
              <span>Ticket Solved</span>
              <span>2</span>
            </div>
            <div className="flex flex-row justify-between mb-2">
              <span>Ticket Pending</span>
              <span>1</span>
            </div>
            <div className="flex flex-row justify-between mb-2">
              <span>Ticket in progress</span>
              <span>2</span>
            </div>
            <div className="flex flex-row items-center mt-2">
              <span>Rating</span>
              {renderStars(5)}
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex flex-col ml-4" style={{ minWidth: 300 }}>
          {[1,2,3].map((i) => (
            <div key={i} className="flex flex-row items-center mb-8">
              <div className="w-16 h-16 rounded-xl bg-[#D9D9D9] flex items-center justify-center mr-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#222"><circle cx="12" cy="8" r="4"/><path d="M12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-normal mb-2">Operation Name {i}</span>
                <button className="bg-[#55D6C2] text-black text-lg rounded-full px-8 py-2 w-fit" style={{ fontFamily: 'serif' }}>View details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Performance;
