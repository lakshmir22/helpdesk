import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    const credentials = {
      user: { password: 'user123', path: '/dashboard' },
      operation: { password: 'op123', path: '/ticket-approval' },
      technical: { password: 'tech123', path: '/dashboard' },
      admin: { password: 'admin123', path: '/admin-dashboard' },
    };

    const user = credentials[username.toLowerCase()];

    if (!user || user.password !== password) {
      alert('Invalid username or password');
      return;
    }

    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userRole', username.toLowerCase());

    navigate(user.path);
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#55D6C2' }}>
      <Card className="w-96 bg-white/50 shadow-lg">
        <CardHeader className="text-center pb-4">
          <h1 className="text-2xl font-bold text-black">Helpdesk System</h1>
        </CardHeader>
        <CardContent className="space-y-4 px-8 pb-8">
          <div>
            <Input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-white border-black rounded-none placeholder-black"
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white border-black rounded-none placeholder-black"
            />
          </div>
          <Button 
            onClick={handleSignIn}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-medium rounded-none"
          >
            Sign In
          </Button>
          <div className="flex justify-between items-center text-sm">
            <Link to="/forgot-password" className="text-red-500 hover:underline">
              Forgot password
            </Link>
            <Link to="/signup" className="text-black hover:underline">
              Sign Up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;
