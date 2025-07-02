
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { User, Edit } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

const AdminProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);

  const renderStars = (currentRating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`cursor-pointer text-2xl ${index < currentRating ? 'text-yellow-400' : 'text-gray-300'}`}
        onClick={() => setRating(index + 1)}
      >
        ★
      </span>
    ));
  };

  const handleSubmitFeedback = () => {
    console.log('Feedback submitted:', { feedback, rating });
    setFeedback('');
    setRating(0);
  };

  if (isEditing) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">User Profile</h1>
        </div>

        <Card className="bg-[#55D6C2]">
          <CardContent className="p-8">
            <div className="bg-white rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Edit Account</h2>
                <Button 
                  onClick={() => setIsEditing(false)}
                  variant="outline"
                  size="sm"
                >
                  Back to Profile
                </Button>
              </div>
              
              <div className="space-y-4">
                {/* Form fields matching the Figma design */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-400 text-white p-3 rounded">Username</div>
                  <Input className="w-full" defaultValue="admin_user" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-400 text-white p-3 rounded">Current Password</div>
                  <Input type="password" className="w-full" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-400 text-white p-3 rounded">New Password</div>
                  <Input type="password" className="w-full" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-400 text-white p-3 rounded">Confirm Password</div>
                  <Input type="password" className="w-full" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-400 text-white p-3 rounded">Email</div>
                  <Input type="email" className="w-full" defaultValue="admin@example.com" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-400 text-white p-3 rounded">Real Name</div>
                  <Input className="w-full" defaultValue="Admin User" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-400 text-white p-3 rounded">Access Level</div>
                  <Input className="w-full" defaultValue="Admin" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-400 text-white p-3 rounded">Project Access Level</div>
                  <Input className="w-full" defaultValue="Full Access" />
                </div>
                
                <Button className="w-full bg-[#55D6C2] hover:bg-[#4BC5B1] text-white mt-6">
                  Update User
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">User Profile</h1>
      </div>

      <Card className="bg-[#55D6C2]">
        <CardContent className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Profile Card */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className="w-20 h-20">
                    <AvatarFallback className="bg-gray-300">
                      <User className="h-10 w-10 text-gray-600" />
                    </AvatarFallback>
                  </Avatar>
                </div>
                <Button
                  onClick={() => setIsEditing(true)}
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-2 text-gray-800">
                <div><strong>Username</strong></div>
                <div><strong>Contact Number</strong></div>
                <div><strong>Email</strong></div>
                <div><strong>Department</strong></div>
              </div>
            </div>

            {/* Feedback Card */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Give Your Feedback</h3>
              <div className="space-y-4">
                <Textarea
                  placeholder="Lorem Ipsum"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full min-h-[100px] bg-gray-100"
                />
                <div className="flex justify-center space-x-1 mb-4">
                  {renderStars(rating)}
                </div>
                <Button 
                  onClick={handleSubmitFeedback}
                  className="w-full bg-[#55D6C2] hover:bg-[#4BC5B1] text-white"
                >
                  Submit Feedback
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminProfile;
