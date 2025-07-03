import React, { useState } from 'react';

const users = [
  { id: 'ABC123', name: 'Abu', department: 'IT', specialty: 'Software' },
  { id: 'ABC124', name: 'Ahmad', department: 'Software', specialty: 'Networking' },
  { id: 'ABC125', name: 'Ali', department: 'Technical', specialty: 'Hardware' },
];

const tabs = [
  { key: 'user', label: 'User' },
  { key: 'operation', label: 'Operation Team' },
  { key: 'technical', label: 'Technical Support' },
];

const pencil = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19.5 2 21l1.5-5L16.5 3.5z"/></svg>
);
const trash = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>
);

const AdminDatabase = () => {
  const [activeTab, setActiveTab] = useState('user');
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  return (
    <div className="w-full h-full bg-[#fafbfc] px-0 pt-0" style={{ fontFamily: 'serif' }}>
      <div>
        <h1 className="text-[2rem] font-bold mb-2 mt-0 ml-0">Database</h1>
        <div className="flex w-full mb-4">
          {tabs.map((tab, idx) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 py-1 text-lg font-normal border border-[#22bfbf] ${activeTab === tab.key ? 'bg-[#22bfbf] text-black' : 'bg-[#bff4f4] text-black'} ${idx === 0 ? 'rounded-l' : ''} ${idx === tabs.length - 1 ? 'rounded-r' : ''}`}
              style={{ borderRight: idx !== tabs.length - 1 ? 'none' : undefined }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {activeTab === 'user' && (
          <>
            <div className="flex items-center mb-2">
              <input
                type="text"
                placeholder="Find ticket"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="rounded bg-[#ededed] border border-[#bdbdbd] px-3 py-1 text-base mr-2 focus:outline-none"
                style={{ width: 160 }}
              />
              <span className="-ml-8 cursor-pointer"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" stroke="#222" strokeWidth="2"/><path d="M21 21l-4.35-4.35" stroke="#222" strokeWidth="2" strokeLinecap="round"/></svg></span>
            </div>
            <div className="flex items-center mb-2">
              <span className="text-base mr-2">Show:</span>
              <select
                value={entriesPerPage}
                onChange={e => setEntriesPerPage(Number(e.target.value))}
                className="border border-black rounded px-2 py-1 text-base mr-2 bg-white"
                style={{ width: 60 }}
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <span className="text-base flex items-center"><svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="inline-block mr-1"><rect x="4" y="6" width="16" height="12" rx="2" fill="#ededed" stroke="#222" strokeWidth="1.5"/><rect x="7" y="9" width="2" height="2" rx="1" fill="#222"/><rect x="11" y="9" width="2" height="2" rx="1" fill="#222"/><rect x="15" y="9" width="2" height="2" rx="1" fill="#222"/></svg>Entries</span>
            </div>
            <div className="border-t border-black w-full mb-2" />
            <table className="w-full border-separate border-spacing-0 text-base" style={{ fontFamily: 'serif' }}>
              <thead>
                <tr>
                  <th className="font-bold text-left py-2 px-4"></th>
                  <th className="font-bold text-left py-2 px-4">Staff ID</th>
                  <th className="font-bold text-left py-2 px-4">Name</th>
                  <th className="font-bold text-left py-2 px-4">Department</th>
                  <th className="font-bold text-left py-2 px-4">Speciality</th>
                  <th className="font-bold text-left py-2 px-4">Setting</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, idx) => (
                  <tr key={user.id} className={idx % 2 === 1 ? 'bg-[#ededed]' : 'bg-[#fafbfc]'}>
                    <td className="py-2 px-4 align-middle"><input type="checkbox" className="w-4 h-4" /></td>
                    <td className="py-2 px-4 align-middle">{user.id}</td>
                    <td className="py-2 px-4 align-middle">{user.name}</td>
                    <td className="py-2 px-4 align-middle">{user.department}</td>
                    <td className="py-2 px-4 align-middle">{user.specialty}</td>
                    <td className="py-2 px-4 align-middle">
                      <span className="inline-block mr-2 align-middle cursor-pointer">{pencil}</span>
                      <span className="inline-block align-middle cursor-pointer">{trash}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between items-center mt-2">
              <div className="text-base">Showing 1 to 3 of 3 entries</div>
              <div className="flex items-center space-x-1">
                <span className="text-xl">&laquo;</span>
                <span className="text-base mx-1">1</span>
                <span className="text-xl">&raquo;</span>
              </div>
            </div>
          </>
        )}
        {activeTab === 'operation' && (
          <div className="text-center p-8 text-gray-500">Operation Team data will be displayed here</div>
        )}
        {activeTab === 'technical' && (
          <div className="text-center p-8 text-gray-500">Technical Support data will be displayed here</div>
        )}
      </div>
    </div>
  );
};

export default AdminDatabase;
