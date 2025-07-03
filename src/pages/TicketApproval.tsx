import React, { useState } from 'react';

const tickets = [
  { id: '1234', subject: 'Login issue', category: 'Access issue', priority: 'High', date: '13/08/21' },
  { id: '1124', subject: 'New ticket issue', category: 'Access issue', priority: 'Medium', date: '14/08/21' },
  { id: '1224', subject: 'New request', category: 'Feedback', priority: 'Low', date: '13/08/21' },
  { id: '1244', subject: 'Ticket submission', category: 'Ticketing', priority: 'High', date: '14/08/21' },
  { id: '1114', subject: 'Login issue', category: 'Access issue', priority: 'High', date: '3/08/21' },
];

const TicketApproval = () => {
  const [search, setSearch] = useState('');
  const [entries, setEntries] = useState(10);

  return (
    <div className="w-full min-h-screen bg-white px-8 pt-4" style={{ fontFamily: 'serif' }}>
      <div className="text-3xl font-normal text-left mb-2">Ticket Approval</div>
      <div className="flex items-center mb-6">
        <input
          type="text"
          placeholder="Find ticket"
          className="border border-gray-400 rounded-md px-4 py-2 text-lg mr-2 bg-[#E5E5E5] focus:outline-none"
          style={{ width: 220 }}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <span className="-ml-8 cursor-pointer">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </span>
      </div>
      <div className="flex items-center mb-2">
        <span className="text-lg mr-2">Show:</span>
            <select 
          className="border border-gray-500 bg-[#C4C4C4] text-lg px-2 py-1 mr-2"
          value={entries}
          onChange={e => setEntries(Number(e.target.value))}
          style={{ width: 60 }}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
        <span className="text-lg">Entries</span>
          </div>
          <div className="overflow-x-auto">
        <table className="w-full mt-2" style={{ borderCollapse: 'collapse' }}>
              <thead>
            <tr style={{ background: 'transparent' }}>
              <th className="text-left py-2 px-2 font-normal text-lg">Ticket No.</th>
              <th className="text-left py-2 px-2 font-normal text-lg">Subject</th>
              <th className="text-left py-2 px-2 font-normal text-lg">Category</th>
              <th className="text-left py-2 px-2 font-normal text-lg">Priority</th>
              <th className="text-left py-2 px-2 font-normal text-lg">Date</th>
              <th className="text-left py-2 px-2 font-normal text-lg">Action</th>
              <th className="text-left py-2 px-2 font-normal text-lg">Assign to</th>
                </tr>
              </thead>
              <tbody>
            {tickets.map((t, i) => (
              <tr key={t.id} style={{ background: i % 2 === 1 ? '#C4C4C4' : '#D3D3D3' }}>
                <td className="py-2 px-2 underline text-lg cursor-pointer">{t.id}</td>
                <td className="py-2 px-2 text-lg">{t.subject}</td>
                <td className="py-2 px-2 text-lg">{t.category}</td>
                <td className="py-2 px-2 text-lg">{t.priority}</td>
                <td className="py-2 px-2 text-lg">{t.date}</td>
                <td className="py-2 px-2">
                  <div className="flex items-center space-x-2">
                    <span className="inline-block align-middle">
                      <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.4911 18.2766L0.366101 10.1516C-0.122034 9.66351 -0.122034 8.87206 0.366101 8.38387L2.13383 6.6161C2.62196 6.12792 3.41346 6.12792 3.9016 6.6161L9.37499 12.0894L21.0984 0.366101C21.5865 -0.122034 22.378 -0.122034 22.8662 0.366101L24.6339 2.13387C25.122 2.62201 25.122 3.41346 24.6339 3.90165L10.2589 18.2767C9.77069 18.7648 8.97924 18.7648 8.4911 18.2766Z" fill="black"/>
                      </svg>
                    </span>
                    <span className="inline-block align-middle">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C18.636 0 24 5.364 24 12C24 18.636 18.636 24 12 24C5.364 24 0 18.636 0 12C0 5.364 5.364 0 12 0ZM16.308 6L12 10.308L7.692 6L6 7.692L10.308 12L6 16.308L7.692 18L12 13.692L16.308 18L18 16.308L13.692 12L18 7.692L16.308 6Z" fill="black"/>
                      </svg>
                    </span>
                  </div>
                </td>
                <td className="py-2 px-2">
                  <div className="flex items-center">
                    <div className="bg-[#C4C4C4] w-28 h-12 flex items-center justify-end pr-2 rounded">
                      <svg width="120" height="46" viewBox="0 0 120 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="120" height="46" fill="#888888"/>
                        <path d="M83.8708 9.5C83.8708 8.30653 84.2957 7.16193 85.0519 6.31802C85.8081 5.47411 86.8337 5 87.9031 5H112.097C113.166 5 114.192 5.47411 114.948 6.31802C115.704 7.16193 116.129 8.30653 116.129 9.5V36.5C116.129 37.6935 115.704 38.8381 114.948 39.682C114.192 40.5259 113.166 41 112.097 41H87.9031C86.8337 41 85.8081 40.5259 85.0519 39.682C84.2957 38.8381 83.8708 37.6935 83.8708 36.5V9.5ZM91.9354 18.5C91.741 18.4999 91.5509 18.5626 91.3877 18.6803C91.2245 18.7981 91.0953 18.966 91.0157 19.1637C90.936 19.3615 90.9092 19.5808 90.9386 19.7952C90.968 20.0095 91.0523 20.2098 91.1813 20.372L99.2458 30.497C99.3404 30.616 99.4565 30.7112 99.5865 30.7764C99.7165 30.8416 99.8574 30.8753 99.9999 30.8753C100.142 30.8753 100.283 30.8416 100.413 30.7764C100.543 30.7112 100.659 30.616 100.754 30.497L108.818 20.372C108.947 20.2098 109.032 20.0095 109.061 19.7952C109.091 19.5808 109.064 19.3615 108.984 19.1637C108.904 18.966 108.775 18.7981 108.612 18.6803C108.449 18.5626 108.259 18.4999 108.064 18.5H91.9354Z" fill="black" fillOpacity="0.66"/>
                      </svg>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg">Showing 1 to 5 of 5 entries</span>
        <div className="flex items-center space-x-2 text-lg">
          <span className="mr-1">&laquo;</span>
          <span>1</span>
          <span className="ml-1">&raquo;</span>
        </div>
      </div>
    </div>
  );
};

export default TicketApproval;
