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
              <tr key={t.id} style={{ background: i % 2 === 1 ? '#C4C4C4' : '#F3F3F3' }}>
                <td className="py-2 px-2 underline text-lg cursor-pointer">{t.id}</td>
                <td className="py-2 px-2 text-lg">{t.subject}</td>
                <td className="py-2 px-2 text-lg">{t.category}</td>
                <td className="py-2 px-2 text-lg">{t.priority}</td>
                <td className="py-2 px-2 text-lg">{t.date}</td>
                <td className="py-2 px-2">
                  <div className="flex items-center space-x-2">
                    <span className="inline-block align-middle">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span className="inline-block align-middle">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </span>
                  </div>
                </td>
                <td className="py-2 px-2">
                  <div className="flex items-center">
                    <div className="bg-[#C4C4C4] w-16 h-8 flex items-center justify-end pr-2 rounded">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
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
