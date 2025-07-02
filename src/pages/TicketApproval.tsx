
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Check, X, Search, User } from 'lucide-react';

const TicketApproval = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const tickets = [
    { id: '1234', subject: 'Login issue', category: 'Access Issue', priority: 'High', date: '13/08/21', status: 'pending' },
    { id: '1124', subject: 'New ticket request', category: 'Access Issue', priority: 'Medium', date: '14/08/21', status: 'pending' },
    { id: '1224', subject: 'New request', category: 'Feedback', priority: 'Low', date: '13/08/21', status: 'pending' },
    { id: '1244', subject: 'Ticket submission', category: 'Ticketing', priority: 'High', date: '14/08/21', status: 'pending' },
    { id: '1114', subject: 'Login issue', category: 'Access Issue', priority: 'High', date: '3/08/21', status: 'pending' },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleApprove = (ticketId: string) => {
    console.log('Approved ticket:', ticketId);
  };

  const handleReject = (ticketId: string) => {
    console.log('Rejected ticket:', ticketId);
  };

  const handleAssign = (ticketId: string) => {
    console.log('Assign ticket:', ticketId);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Ticket Approval</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Find ticket</CardTitle>
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search tickets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-sm text-gray-600">Show:</span>
            <select 
              value={entriesPerPage}
              onChange={(e) => setEntriesPerPage(Number(e.target.value))}
              className="border rounded px-2 py-1 text-sm"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            <span className="text-sm text-gray-600">Entries</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 font-medium">Ticket No.</th>
                  <th className="text-left p-2 font-medium">Subject</th>
                  <th className="text-left p-2 font-medium">Category</th>
                  <th className="text-left p-2 font-medium">Priority</th>
                  <th className="text-left p-2 font-medium">Date</th>
                  <th className="text-left p-2 font-medium">Action</th>
                  <th className="text-left p-2 font-medium">Assign to</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket) => (
                  <tr key={ticket.id} className="border-b hover:bg-gray-50">
                    <td className="p-2 text-blue-600 font-medium">{ticket.id}</td>
                    <td className="p-2">{ticket.subject}</td>
                    <td className="p-2">{ticket.category}</td>
                    <td className="p-2">
                      <Badge className={getPriorityColor(ticket.priority)}>
                        {ticket.priority}
                      </Badge>
                    </td>
                    <td className="p-2">{ticket.date}</td>
                    <td className="p-2">
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleApprove(ticket.id)}
                          className="text-green-600 hover:bg-green-50"
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleReject(ticket.id)}
                          className="text-red-600 hover:bg-red-50"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                    <td className="p-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleAssign(ticket.id)}
                        className="text-gray-600 hover:bg-gray-50"
                      >
                        <User className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-600">
              Showing 1 to 5 of 5 entries
            </span>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">Previous</Button>
              <Button variant="outline" size="sm">1</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TicketApproval;
