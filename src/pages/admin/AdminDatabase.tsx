
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Edit, Trash2 } from 'lucide-react';

const AdminDatabase = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const users = [
    { id: 'ABC123', name: 'Abu', department: 'IT', specialty: 'Software' },
    { id: 'ABC124', name: 'Ahmad', department: 'Software', specialty: 'Networking' },
    { id: 'ABC125', name: 'Ali', department: 'Technical', specialty: 'Hardware' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Database</h1>
      </div>

      <Card>
        <CardContent className="p-6">
          <Tabs defaultValue="user" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-[#55D6C2]">
              <TabsTrigger value="user" className="text-white data-[state=active]:bg-white data-[state=active]:text-black">
                User
              </TabsTrigger>
              <TabsTrigger value="operation" className="text-white data-[state=active]:bg-white data-[state=active]:text-black">
                Operation Team
              </TabsTrigger>
              <TabsTrigger value="technical" className="text-white data-[state=active]:bg-white data-[state=active]:text-black">
                Technical Support
              </TabsTrigger>
            </TabsList>

            <TabsContent value="user" className="mt-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Input
                    placeholder="Find ticket"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-sm"
                  />
                  <Button variant="outline" size="icon">
                    🔍
                  </Button>
                </div>

                <div className="text-sm text-gray-600 mb-4">
                  Show: 10 📋 Entries
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-medium">Staff ID</th>
                        <th className="text-left p-3 font-medium">Name</th>
                        <th className="text-left p-3 font-medium">Department</th>
                        <th className="text-left p-3 font-medium">Speciality</th>
                        <th className="text-left p-3 font-medium">Setting</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.id} className="border-b hover:bg-gray-50">
                          <td className="p-3">{user.id}</td>
                          <td className="p-3">{user.name}</td>
                          <td className="p-3">{user.department}</td>
                          <td className="p-3">{user.specialty}</td>
                          <td className="p-3">
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <div className="text-sm text-gray-600">
                    Showing 1 to 3 of 3 entries
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">‹ 1 ›</Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="operation" className="mt-6">
              <div className="text-center p-8 text-gray-500">
                Operation Team data will be displayed here
              </div>
            </TabsContent>

            <TabsContent value="technical" className="mt-6">
              <div className="text-center p-8 text-gray-500">
                Technical Support data will be displayed here
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDatabase;
