
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { ChevronDown } from 'lucide-react';

const AdminSettings = () => {
  const [expandedSections, setExpandedSections] = useState({
    general: true,
    connectTo: true,
    email: true,
    authorization: true,
    notification: true
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Setting</h1>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            {/* General Section */}
            <div className="bg-[#55D6C2] rounded-lg">
              <button
                onClick={() => toggleSection('general')}
                className="w-full flex items-center justify-between p-4 text-white font-medium"
              >
                General
                <ChevronDown className={`h-4 w-4 transition-transform ${expandedSections.general ? 'rotate-180' : ''}`} />
              </button>
              {expandedSections.general && (
                <div className="bg-gray-100 p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Language</span>
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-black text-white">BM</Button>
                      <Button size="sm" variant="outline">BI</Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Data Backup</span>
                    <Switch defaultChecked />
                  </div>
                </div>
              )}
            </div>

            {/* Connect To Section */}
            <div className="bg-[#55D6C2] rounded-lg">
              <button
                onClick={() => toggleSection('connectTo')}
                className="w-full flex items-center justify-between p-4 text-white font-medium"
              >
                Connect To
                <ChevronDown className={`h-4 w-4 transition-transform ${expandedSections.connectTo ? 'rotate-180' : ''}`} />
              </button>
              {expandedSections.connectTo && (
                <div className="bg-gray-100 p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span>GoDash</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex justify-between items-center">
                    <span>SuperController</span>
                    <Switch defaultChecked />
                  </div>
                </div>
              )}
            </div>

            {/* Email Section */}
            <div className="bg-[#55D6C2] rounded-lg">
              <button
                onClick={() => toggleSection('email')}
                className="w-full flex items-center justify-between p-4 text-white font-medium"
              >
                Email
                <ChevronDown className={`h-4 w-4 transition-transform ${expandedSections.email ? 'rotate-180' : ''}`} />
              </button>
              {expandedSections.email && (
                <div className="bg-gray-100 p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Enable SMTP</span>
                    <Switch defaultChecked />
                  </div>
                </div>
              )}
            </div>

            {/* Authorization Section */}
            <div className="bg-[#55D6C2] rounded-lg">
              <button
                onClick={() => toggleSection('authorization')}
                className="w-full flex items-center justify-between p-4 text-white font-medium"
              >
                Authorization
                <ChevronDown className={`h-4 w-4 transition-transform ${expandedSections.authorization ? 'rotate-180' : ''}`} />
              </button>
              {expandedSections.authorization && (
                <div className="bg-gray-100 p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Edit authorization</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Authority Level</span>
                    <Button size="sm" className="bg-gray-600 text-white">8</Button>
                  </div>
                </div>
              )}
            </div>

            {/* Notification Section */}
            <div className="bg-[#55D6C2] rounded-lg">
              <button
                onClick={() => toggleSection('notification')}
                className="w-full flex items-center justify-between p-4 text-white font-medium"
              >
                Notification
                <ChevronDown className={`h-4 w-4 transition-transform ${expandedSections.notification ? 'rotate-180' : ''}`} />
              </button>
              {expandedSections.notification && (
                <div className="bg-gray-100 p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Enable Notification</span>
                    <Switch defaultChecked />
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSettings;
