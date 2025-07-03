import React, { useState } from 'react';

const logEntries = [
  {
    no: 1,
    signInTime: '130821 / 0800',
    staffId: 'XL000001',
    department: 'OT',
    activity: 'Create Team',
    signOutTime: '130821 / 0815',
  },
  {
    no: 2,
    signInTime: '130821 / 0805',
    staffId: '',
    department: '',
    activity: '',
    signOutTime: '130821 / 0810',
  },
  { no: 3, signInTime: '', staffId: '', department: '', activity: '', signOutTime: '' },
  { no: 4, signInTime: '', staffId: '', department: '', activity: '', signOutTime: '' },
  { no: 5, signInTime: '', staffId: '', department: '', activity: '', signOutTime: '' },
];

const AdminUserLog = () => {
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  return (
    <div className="w-full h-full bg-[#fafbfc] px-0 pt-0" style={{ fontFamily: 'serif' }}>
      <div>
        <h1 className="text-[2rem] font-bold mb-2 mt-0 ml-0">User Log History</h1>
        <div className="border-t border-black w-full mb-2" />
        <div className="flex items-center mb-2">
          <span className="text-base mr-2">Show:</span>
          <select
            value={entriesPerPage}
            onChange={(e) => setEntriesPerPage(Number(e.target.value))}
            className="border border-black rounded px-2 py-1 text-base mr-2 bg-white"
            style={{ width: 60 }}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
          <span className="text-base flex items-center"><svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="inline-block mr-1"><rect x="4" y="6" width="16" height="12" rx="2" fill="#ededed" stroke="#222" strokeWidth="1.5"/><rect x="7" y="9" width="2" height="2" rx="1" fill="#222"/><rect x="11" y="9" width="2" height="2" rx="1" fill="#222"/><rect x="15" y="9" width="2" height="2" rx="1" fill="#222"/></svg>Entries</span>
        </div>
        <table className="w-full border-separate border-spacing-0 text-base" style={{ fontFamily: 'serif' }}>
          <thead>
            <tr>
              <th className="font-bold text-left py-2 px-4">No.</th>
              <th className="font-bold text-left py-2 px-4">Date/Sign InTime</th>
              <th className="font-bold text-left py-2 px-4">Staff ID</th>
              <th className="font-bold text-left py-2 px-4">Department</th>
              <th className="font-bold text-left py-2 px-4">Activity</th>
              <th className="font-bold text-left py-2 px-4">Date/Sign Out time</th>
            </tr>
          </thead>
          <tbody>
            {logEntries.map((entry, idx) => (
              <tr key={entry.no} className={idx % 2 === 1 ? 'bg-[#ededed]' : 'bg-[#fafbfc]'}>
                <td className="py-2 px-4 align-middle">{entry.no}.</td>
                <td className="py-2 px-4 align-middle">{entry.signInTime}</td>
                <td className="py-2 px-4 align-middle">{entry.staffId}</td>
                <td className="py-2 px-4 align-middle">{entry.department}</td>
                <td className="py-2 px-4 align-middle">{entry.activity}</td>
                <td className="py-2 px-4 align-middle">{entry.signOutTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-2">
          <div className="text-base">Showing 1 to 5 of 5 entries</div>
          <div className="flex items-center space-x-1">
            <span className="text-xl">&laquo;</span>
            <span className="text-base mx-1">1</span>
            <span className="text-xl">&raquo;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUserLog;
