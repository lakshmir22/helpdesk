import React from 'react';

const tickets = [
  {
    no: '1234',
    subject: 'Login issue',
    status: 'In Progress',
    support: 'Tech support',
    date: '13/08/21',
    rate: 0,
  },
  {
    no: '1124',
    subject: 'New ticket issue',
    status: 'On hold',
    support: 'Operation Team',
    date: '14/08/21',
    rate: 0,
  },
  {
    no: '1224',
    subject: 'New request',
    status: 'Closed',
    support: 'Tech support',
    date: '13/08/21',
    rate: 3.5,
  },
  {
    no: '1244',
    subject: 'Ticket submission',
    status: 'In Progress',
    support: 'Operation Team',
    date: '14/08/21',
    rate: 0,
  },
  {
    no: '1114',
    subject: 'Login issue',
    status: 'In Progress',
    support: 'Tech support',
    date: '3/08/21',
    rate: 0,
  },
];

const statusStyles = {
  'In Progress': 'bg-green-500 text-white',
  'On hold': 'bg-blue-700 text-white',
  'Closed': 'bg-gray-700 text-white',
};

const renderStars = (rate: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rate >= i) {
      stars.push(<span key={i} style={{ color: '#FFD600', fontSize: 20 }}>★</span>);
    } else if (rate > i - 1 && rate < i) {
      stars.push(<span key={i} style={{ color: '#FFD600', fontSize: 20 }}>☆</span>);
    } else {
      stars.push(<span key={i} style={{ color: '#C4C4C4', fontSize: 20 }}>★</span>);
    }
  }
  return stars;
};

const MyTickets = () => {
  return (
    <div className="w-full min-h-screen bg-white px-8 pt-4" style={{ fontFamily: 'serif' }}>
      <div className="text-3xl font-normal text-left mb-2">List of Ticket</div>
      {/* Search and controls */}
      <div className="flex items-center mb-6">
        <input
          type="text"
          placeholder="Find ticket"
          className="border border-gray-400 rounded-md px-4 py-2 text-lg mr-2 bg-[#C4C4C4] focus:outline-none"
          style={{ width: 220 }}
        />
        <span className="-ml-8 cursor-pointer">
          <span role="img" aria-label="search" style={{ fontSize: 22 }}>🔍</span>
        </span>
      </div>
      <div className="flex items-center mb-2">
        <span className="text-lg mr-2">Show:</span>
        <select className="border border-gray-400 bg-[#C4C4C4] text-lg px-2 py-1 mr-2" style={{ width: 60 }}>
          <option>10</option>
        </select>
        <span className="text-lg">Entries</span>
      </div>
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full mt-2 text-left border-collapse" style={{ fontFamily: 'serif' }}>
          <thead>
            <tr>
              <th className="py-2 px-2 font-normal text-lg">Ticket No.</th>
              <th className="py-2 px-2 font-normal text-lg">Subject</th>
              <th className="py-2 px-2 font-normal text-lg">Status</th>
              <th className="py-2 px-2 font-normal text-lg">Support by</th>
              <th className="py-2 px-2 font-normal text-lg">Date</th>
              <th className="py-2 px-2 font-normal text-lg">Rate</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((t, i) => (
              <tr key={t.no} style={{ background: i % 2 === 1 ? '#C4C4C4' : '#F3F3F3' }}>
                <td className="py-2 px-2 underline text-lg cursor-pointer text-blue-700">{t.no}</td>
                <td className="py-2 px-2 text-lg">{t.subject}</td>
                <td className="py-2 px-2 text-lg">
                  <span className={`px-3 py-1 rounded-md font-semibold text-sm ${statusStyles[t.status] || ''}`} style={{ display: 'inline-block', minWidth: 80, textAlign: 'center' }}>
                    {t.status}
                  </span>
                </td>
                <td className="py-2 px-2 text-lg">{t.support}</td>
                <td className="py-2 px-2 text-lg">{t.date}</td>
                <td className="py-2 px-2 text-lg">{renderStars(t.rate)}</td>
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
      {/* Footer */}
      <div className="w-full text-center py-2 text-xs text-black bg-[#55D6C2] rounded-b-lg mt-4" style={{ fontFamily: 'serif' }}>Footer Area</div>
    </div>
  );
};

export default MyTickets;
