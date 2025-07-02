
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AdminUserLog = () => {
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const logEntries = [
    {
      no: 1,
      signInTime: '130821 / 0800',
      staffId: 'XL000001',
      department: 'OT',
      activity: 'Create Team',
      signOutTime: '130821 / 0815'
    },
    {
      no: 2,
      signInTime: '130821 / 0805',
      staffId: '',
      department: '',
      activity: '',
      signOutTime: '130821 / 0810'
    },
    { no: 3, signInTime: '', staffId: '', department: '', activity: '', signOutTime: '' },
    { no: 4, signInTime: '', staffId: '', department: '', activity: '', signOutTime: '' },
    { no: 5, signInTime: '', staffId: '', department: '', activity: '', signOutTime: '' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">User Log History</h1>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Show:</span>
              <select 
                value={entriesPerPage}
                onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                className="border rounded px-2 py-1 text-sm w-16"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <span className="text-sm text-gray-600">📋 Entries</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-medium">No.</th>
                    <th className="text-left p-3 font-medium">Date/Sign InTime</th>
                    <th className="text-left p-3 font-medium">Staff ID</th>
                    <th className="text-left p-3 font-medium">Department</th>
                    <th className="text-left p-3 font-medium">Activity</th>
                    <th className="text-left p-3 font-medium">Date/Sign Out time</th>
                  </tr>
                </thead>
                <tbody>
                  {logEntries.map((entry) => (
                    <tr key={entry.no} className="border-b hover:bg-gray-50">
                      <td className="p-3">{entry.no}</td>
                      <td className="p-3">{entry.signInTime}</td>
                      <td className="p-3">{entry.staffId}</td>
                      <td className="p-3">{entry.department}</td>
                      <td className="p-3">{entry.activity}</td>
                      <td className="p-3">{entry.signOutTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div className="text-sm text-gray-600">
                Showing 1 to 5 of 5 entries
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">‹‹</Button>
                <Button variant="outline" size="sm">1</Button>
                <Button variant="outline" size="sm">››</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminUserLog;
