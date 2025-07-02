
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { User } from 'lucide-react';

const Performance = () => {
  const userRole = localStorage.getItem('userRole');
  
  const operationStats = {
    totalTicketHandle: 5,
    ticketSolved: 2,
    ticketPending: 1,
    ticketInProgress: 2,
    rating: 4.5
  };

  const operations = [
    { 
      id: 1, 
      name: userRole === 'technical' ? 'Technical Support Name' : 'Operation Name 1', 
      contact: '0123456789', 
      department: 'ABC' 
    },
    { 
      id: 2, 
      name: userRole === 'technical' ? 'Technical Support 1' : 'Operation Name 2', 
      contact: '0123456789', 
      department: 'ABC' 
    },
    { 
      id: 3, 
      name: userRole === 'technical' ? 'Technical Support 2' : 'Operation Name 3', 
      contact: '0123456789', 
      department: 'ABC' 
    },
    { 
      id: 4, 
      name: userRole === 'technical' ? 'Technical Support 3' : 'Operation Name 4', 
      contact: '0123456789', 
      department: 'ABC' 
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Performance</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Card */}
        <Card>
          <CardHeader>
            <CardTitle>
              {userRole === 'technical' ? 'Technical Support Name' : 'Operation Name'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="w-16 h-16">
                <AvatarFallback>
                  <User className="h-8 w-8" />
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm text-gray-600">Contact No: 0123456789</p>
                <p className="text-sm text-gray-600">Department: ABC</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Total Ticket Handle</span>
                <span className="text-sm font-bold">{operationStats.totalTicketHandle}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Ticket Solved</span>
                <span className="text-sm font-bold">{operationStats.ticketSolved}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Ticket Pending</span>
                <span className="text-sm font-bold">{operationStats.ticketPending}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Ticket in progress</span>
                <span className="text-sm font-bold">{operationStats.ticketInProgress}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Rating</span>
                <div className="flex">
                  {renderStars(operationStats.rating)}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team List */}
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {operations.map((operation) => (
                <div key={operation.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback>
                        <User className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{operation.name}</span>
                  </div>
                  <Button 
                    className="bg-[#55D6C2] hover:bg-[#4BC5B1] text-white"
                    size="sm"
                  >
                    View details
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Performance;
