
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Handle password reset
    console.log('Password reset for:', email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#55D6C2' }}>
      <Card className="w-96 bg-white/90 shadow-lg">
        <CardContent className="space-y-6 px-8 py-8">
          <div className="text-center space-y-2">
            <p className="text-gray-800">Don't worry, Enter your email below and we will</p>
            <p className="text-gray-800">send you a link to change password.</p>
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white border-gray-300"
            />
          </div>
          <div className="space-y-3">
            <Button 
              onClick={handleSubmit}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium"
            >
              Submit
            </Button>
            <Link to="/signin">
              <Button 
                variant="outline"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium border-blue-500"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPassword;
