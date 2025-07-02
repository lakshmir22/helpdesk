import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Download, Eye, Pencil, Paperclip, Search } from 'lucide-react';
import CloseTicketModal from '@/components/CloseTicketModal';

const MyTickets = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [closeModalOpen, setCloseModalOpen] = useState(false);

  const tickets = [
    { id: '1234', subject: 'Login issue', category: 'Access issue', priority: 'High', date: '13/08/21', status: 'In Progress', person: 'John' },
    { id: '1124', subject: 'New ticket issue', category: 'Access issue', priority: 'Medium', date: '14/08/21', status: 'On hold', person: 'Jane' },
    { id: '1224', subject: 'New request', category: 'Feedback', priority: 'Low', date: '13/08/21', status: 'Closed', person: 'Bob' },
    { id: '1244', subject: 'Ticket submission', category: 'Ticketing', priority: 'High', date: '14/08/21', status: 'In Progress', person: 'Alice' },
    { id: '1114', subject: 'Login issue', category: 'Access issue', priority: 'High', date: '3/08/21', status: 'In Progress', person: 'Charlie' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress': return 'bg-green-400';
      case 'On hold': return 'bg-blue-600';
      case 'Closed': return 'bg-black';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'text-red-600 font-semibold';
      case 'Medium': return 'text-yellow-600 font-semibold';
      case 'Low': return 'text-green-600 font-semibold';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">My Ticket</h1>
      
      <Card className="bg-gray-100 border border-gray-300">
        <CardContent className="p-6">
         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
  {/* Left: Show entries dropdown */}
 <div className="flex items-center gap-2 text-sm text-black">
  <span>Show:</span>
  <div className="bg-gray-300 rounded">
    <div className="relative inline-block">
      <select
        className="bg-gray-300 text-black text-sm"
        defaultValue={10}
      >
        <option value={10}>10</option>
        <option value={50}>50</option>
        <option value={75}>75</option>
        <option value={100}>100</option>
      </select>

      {/* White arrow using inline SVG */}
      <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
        <svg className="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path d="M7 7l3 3 3-3" />
        </svg>
      </div>
    </div>
  </div>
  <span>Entries</span>
</div>



  {/* Right: Search input and download */}
  <div className="flex items-center gap-2">
    <div className="relative">
      <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
      <Input
        placeholder="Find ticket"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pl-10 pr-3 py-2 rounded bg-white text-sm shadow max-w-xs"
      />
    </div>
    <Button variant="ghost" size="icon" className="text-black">
      <Download size={18} />
    </Button>
  </div>
</div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse bg-white rounded shadow-sm">
              <thead className="bg-gray-200">
                <tr>
                  <th className="text-left p-3">Ticket No.</th>
                  <th className="text-left p-3">Subject</th>
                  <th className="text-left p-3">Category</th>
                  <th className="text-left p-3">Priority</th>
                  <th className="text-left p-3">Date</th>
                  <th className="text-left p-3">Status</th>
                  <th className="text-left p-3">Person in charge</th>
                  <th className="text-left p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket, index) => (
                  <tr key={ticket.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-3 text-blue-600 underline cursor-pointer">{ticket.id}</td>
                    <td className="p-3">{ticket.subject}</td>
                    <td className="p-3">{ticket.category}</td>
                    <td className={`p-3 ${getPriorityColor(ticket.priority)}`}>{ticket.priority}</td>
                    <td className="p-3">{ticket.date}</td>
                    <td className="p-3">
                      <Badge className={`${getStatusColor(ticket.status)} text-white text-xs px-3 py-1 rounded-full`}>
                        {ticket.status}
                      </Badge>
                    </td>
                    <td className="p-3">{ticket.person}</td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <img src="/action1.png" alt="View" className="w-5 h-5" />
                          </DialogTrigger>
                          <DialogContent className="max-w-md">
                            <DialogHeader>
                              <DialogTitle>Ticket Details</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-2 text-sm">
                              <div><strong>Ticket No:</strong> {ticket.id}</div>
                              <div><strong>Date:</strong> {ticket.date}</div>
                              <div><strong>Name:</strong> {ticket.person}</div>
                              <div><strong>Dept:</strong> IT</div>
                              <div><strong>Title:</strong> {ticket.subject}</div>
                              <div><strong>Description:</strong> Issue description here</div>
                              <div><strong>Category:</strong> {ticket.category}</div>
                              <div><strong>Type:</strong> Bug</div>
                              <div><strong>Priority:</strong> {ticket.priority}</div>
                              <div><strong>Status:</strong> {ticket.status}</div>
                              <div><strong>Attachment:</strong> None</div>
                              <div className="flex gap-2 pt-3">
                                <Button className="bg-blue-500 hover:bg-blue-600">Update</Button>
                                <Button
                                  className="bg-green-500 hover:bg-green-600"
                                  onClick={() => {
                                    setSelectedTicket(ticket.id);
                                    setCloseModalOpen(true);
                                  }}
                                >
                                  Close
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <img src="/action2.png" alt="View" className="w-5 h-5" />
                        <img src="/action3.png" alt="View" className="w-5 h-5" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
            <div>Showing 1 to 5 of 5 entries</div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">«</Button>
              <Button variant="ghost" size="sm" className="font-semibold text-black">1</Button>
              <Button variant="ghost" size="sm">»</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {selectedTicket && (
        <CloseTicketModal
          isOpen={closeModalOpen}
          onClose={() => setCloseModalOpen(false)}
          ticketId={selectedTicket}
        />
      )}
    </div>
  );
};

export default MyTickets;
