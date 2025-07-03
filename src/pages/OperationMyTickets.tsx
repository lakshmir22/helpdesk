import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const tickets = [
  {
    no: '1234',
    subject: 'Login issue',
    category: 'Access issue',
    priority: 'High',
    date: '13/08/21',
    status: 'In Progress',
    person: 'John Doe',
  },
  {
    no: '1124',
    subject: 'New ticket issue',
    category: 'Access issue',
    priority: 'Medium',
    date: '14/08/21',
    status: 'On hold',
    person: 'Jane Smith',
  },
  {
    no: '1224',
    subject: 'New request',
    category: 'Feedback',
    priority: 'Low',
    date: '13/08/21',
    status: 'Closed',
    person: 'Alice',
  },
  {
    no: '1244',
    subject: 'Ticket submission',
    category: 'Ticketing',
    priority: 'High',
    date: '14/08/21',
    status: 'In Progress',
    person: 'Bob',
  },
  {
    no: '1114',
    subject: 'Login issue',
    category: 'Access issue',
    priority: 'High',
    date: '3/08/21',
    status: 'In Progress',
    person: 'John Doe',
  },
];

const statusStyles = {
  'In Progress': 'bg-[#55D6C2] text-black',
  'On hold': 'bg-[#2B537C] text-white',
  'Closed': 'bg-black text-white',
};

const OperationMyTickets = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showTeam, setShowTeam] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const handleView = (ticket) => {
    setSelectedTicket(ticket);
    setShowDetails(true);
  };
  const handleTeam = (ticket) => {
    setSelectedTicket(ticket);
    setShowTeam(true);
  };

  return (
    <div className="w-full min-h-screen bg-white px-8 pt-4" style={{ fontFamily: 'serif' }}>
      <div className="text-3xl font-normal text-left mb-2">My Ticket</div>
      {/* Search and controls */}
      <div className="flex items-center mb-6">
        <input
          type="text"
          placeholder="Find ticket"
          className="border border-gray-400 rounded-md px-4 py-2 text-lg mr-2 bg-[#E5E5E5] focus:outline-none"
          style={{ width: 220 }}
        />
        <span className="-ml-8 cursor-pointer">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
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
              <th className="py-2 px-2 font-normal text-lg">Category</th>
              <th className="py-2 px-2 font-normal text-lg">Priority</th>
              <th className="py-2 px-2 font-normal text-lg">Date</th>
              <th className="py-2 px-2 font-normal text-lg">Status</th>
              <th className="py-2 px-2 font-normal text-lg">Person in charge</th>
              <th className="py-2 px-2 font-normal text-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((t, i) => (
              <tr key={t.no} style={{ background: i % 2 === 1 ? '#C4C4C4' : '#F3F3F3' }}>
                <td className="py-2 px-2 underline text-lg cursor-pointer text-blue-700">{t.no}</td>
                <td className="py-2 px-2 text-lg">{t.subject}</td>
                <td className="py-2 px-2 text-lg">{t.category}</td>
                <td className="py-2 px-2 text-lg">{t.priority}</td>
                <td className="py-2 px-2 text-lg">{t.date}</td>
                <td className="py-2 px-2 text-lg">
                  <span className={`px-3 py-1 rounded-md font-semibold text-sm ${statusStyles[t.status] || ''}`} style={{ display: 'inline-block', minWidth: 90, textAlign: 'center' }}>
                    {t.status}
                  </span>
                </td>
                <td className="py-2 px-2 text-lg">{t.person}</td>
                <td className="py-2 px-2 text-lg flex items-center gap-2">
                  <span className="inline-block align-middle cursor-pointer" title="View" onClick={() => handleView(t)}>
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.13 9L16.39 7.74C16.83 7.3 17.39 7.06 18 7V6L12 0H2C0.89 0 0 0.89 0 2V16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H8V16.13L8.13 16H2V2H9V9H15.13ZM11 1.5L16.5 7H11V1.5ZM16.13 10.83L18.17 12.87L12.04 19H10V16.96L16.13 10.83ZM19.85 11.19L18.87 12.17L16.83 10.13L17.81 9.15C18 8.95 18.33 8.95 18.53 9.15L19.85 10.47C20.05 10.67 20.05 11 19.85 11.19Z" fill="black"/>
                    </svg>
                  </span>
                  <span className="inline-block align-middle cursor-pointer" title="Add" onClick={() => handleTeam(t)}>
                    <svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.1667 15.4286V18H8.16667V15.4286C8.16667 15.4286 8.16667 10.2857 15.1667 10.2857C22.1667 10.2857 22.1667 15.4286 22.1667 15.4286ZM18.6667 3.85714C18.6667 3.09427 18.4614 2.34853 18.0768 1.71423C17.6922 1.07993 17.1456 0.585547 16.5061 0.293609C15.8665 0.00167125 15.1628 -0.0747131 14.4839 0.0741156C13.8049 0.222944 13.1813 0.590301 12.6918 1.12973C12.2023 1.66916 11.869 2.35644 11.7339 3.10465C11.5989 3.85287 11.6682 4.62841 11.9331 5.33321C12.198 6.03801 12.6466 6.64041 13.2222 7.06424C13.7977 7.48807 14.4744 7.71429 15.1667 7.71429C16.0949 7.71429 16.9852 7.30791 17.6415 6.58456C18.2979 5.8612 18.6667 4.88012 18.6667 3.85714ZM22.4 10.3629C23.0377 11.0112 23.5519 11.7931 23.9124 12.6629C24.273 13.5326 24.4727 14.4728 24.5 15.4286V18H28V15.4286C28 15.4286 28 10.9929 22.4 10.3629ZM21 1.46718e-06C20.6475 0.000233941 20.2972 0.0609614 19.9617 0.180001C20.6442 1.25868 21.0102 2.54209 21.0102 3.85714C21.0102 5.17219 20.6442 6.45561 19.9617 7.53429C20.2972 7.65333 20.6475 7.71405 21 7.71429C21.9283 7.71429 22.8185 7.30791 23.4749 6.58456C24.1313 5.8612 24.5 4.88012 24.5 3.85714C24.5 2.83417 24.1313 1.85309 23.4749 1.12973C22.8185 0.406378 21.9283 1.46718e-06 21 1.46718e-06ZM9.33333 6.42857H5.83333V2.57143H3.5V6.42857H0V9H3.5V12.8571H5.83333V9H9.33333V6.42857Z" fill="black"/>
                    </svg>
                  </span>
                  <span className="inline-block align-middle cursor-pointer" title="Download">
                    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 18H14V15.8824H0V18ZM14 6.35294H10V0H4V6.35294H0L7 13.7647L14 6.35294Z" fill="black"/>
                    </svg>
                  </span>
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
      {/* Ticket Details Modal */}
      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent 
          style={{ width: 480, height: 430, border: '1px solid', fontFamily: 'serif', padding: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
          className="bg-white">
          <div className="text-2xl font-normal text-center mb-4 mt-4">Ticket Details</div>
          <div className="w-full px-8 text-base font-normal" style={{ fontFamily: 'Sanchez, serif', fontWeight: 525, fontSize: 15}}>
            <div className="mb-0.5 flex"><span>Ticket No:</span><span className="ml-2">{selectedTicket?.no}</span></div>
            <div className="mb-0.5">Date:</div>
            <div className="mb-0.5">Name:</div>
            <div className="mb-0.5">Dept:</div>
            <div className="my-2"></div>
            <div className="mb-0.5">Title:</div>
            <div className="mb-0.5">Description:</div>
            <div className="mb-0.5">Category:</div>
            <div className="mb-0.5">Type:</div>
            <div className="mb-0.5">Priority:</div>
            <div className="mb-0.5">Status:</div>
            <div className="mb-0.5">Attachment:</div>
          </div>
          <div className="flex justify-center gap-8 mt-auto mb-4 w-full px-8">
            <button className="bg-[#8C9EFF] text-black text-base rounded-md px-8 py-2 w-36" style={{ fontFamily: 'serif' }}>Update</button>
            <button className="bg-[#4CAF50] text-black text-base rounded-md px-8 py-2 w-36" style={{ fontFamily: 'serif' }} onClick={() => setShowDetails(false)}>Close</button>
          </div>
        </DialogContent>
      </Dialog>
      {/* Team Creation Modal */}
      <Dialog open={showTeam} onOpenChange={setShowTeam}>
        <DialogContent style={{ width: 700, maxWidth: 'none', height: 430, fontFamily: 'serif' }} className="p-0 flex flex-col items-center justify-center">
          <div className="text-2xl font-normal text-center mt-8 mb-4">My Ticket - Team Creation</div>
          <div className="bg-[#55D6C2] rounded-2xl flex flex-col items-center justify-center mx-auto px-8 py-6" style={{ width: 600, minHeight: 270 }}>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 w-full mb-6">
              <div className="flex flex-col gap-3">
                <input className="rounded-md px-2 py-2 shadow" placeholder="Ticket No." style={{ fontStyle: 'italic' }} />
                <input className="rounded-md px-2 py-2 shadow" placeholder="Team name" />
                <div className="flex items-center relative">
                  <input className="rounded-md px-2 py-2 w-full pr-10 shadow" placeholder="Team Member" />
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer">
                    <svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.1667 15.4286V18H8.16667V15.4286C8.16667 15.4286 8.16667 10.2857 15.1667 10.2857C22.1667 10.2857 22.1667 15.4286 22.1667 15.4286ZM18.6667 3.85714C18.6667 3.09427 18.4614 2.34853 18.0768 1.71423C17.6922 1.07993 17.1456 0.585547 16.5061 0.293609C15.8665 0.00167125 15.1628 -0.0747131 14.4839 0.0741156C13.8049 0.222944 13.1813 0.590301 12.6918 1.12973C12.2023 1.66916 11.869 2.35644 11.7339 3.10465C11.5989 3.85287 11.6682 4.62841 11.9331 5.33321C12.198 6.03801 12.6466 6.64041 13.2222 7.06424C13.7977 7.48807 14.4744 7.71429 15.1667 7.71429C16.0949 7.71429 16.9852 7.30791 17.6415 6.58456C18.2979 5.8612 18.6667 4.88012 18.6667 3.85714ZM22.4 10.3629C23.0377 11.0112 23.5519 11.7931 23.9124 12.6629C24.273 13.5326 24.4727 14.4728 24.5 15.4286V18H28V15.4286C28 15.4286 28 10.9929 22.4 10.3629ZM21 1.46718e-06C20.6475 0.000233941 20.2972 0.0609614 19.9617 0.180001C20.6442 1.25868 21.0102 2.54209 21.0102 3.85714C21.0102 5.17219 20.6442 6.45561 19.9617 7.53429C20.2972 7.65333 20.6475 7.71405 21 7.71429C21.9283 7.71429 22.8185 7.30791 23.4749 6.58456C24.1313 5.8612 24.5 4.88012 24.5 3.85714C24.5 2.83417 24.1313 1.85309 23.4749 1.12973C22.8185 0.406378 21.9283 1.46718e-06 21 1.46718e-06ZM9.33333 6.42857H5.83333V2.57143H3.5V6.42857H0V9H3.5V12.8571H5.83333V9H9.33333V6.42857Z" fill="black"/>
                    </svg>
                  </span>
                </div>
              </div>
              <textarea className="rounded-md px-2 py-2 h-full ml-2 shadow" placeholder="Remark" style={{ minHeight: 110, resize: 'none' }} />
            </div>
            <div className="flex w-full justify-center mt-2 gap-2">
              <span className="flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.13-3.36L23 10M1 14l5.36 5.36A9 9 0 0 0 20.49 15"/></svg>
              </span>
              <button className="bg-gray-400 text-black text-base rounded px-4 py-1 shadow" style={{ fontFamily: 'serif' }}>Create Team</button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      {/* Footer */}
      <div className="w-full text-center py-2 text-xs text-black bg-[#55D6C2] rounded-b-lg mt-4" style={{ fontFamily: 'serif' }}>Footer Area</div>
    </div>
  );
};

export default OperationMyTickets; 