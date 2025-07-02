
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (!role) {
      alert('Please select a role');
      return;
    }
    
    // Store authentication and role info
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userRole', role);
    
    // Navigate based on role
    switch (role) {
      case 'user':
        navigate('/dashboard');
        break;
      case 'operation':
        navigate('/ticket-approval');
        break;
      case 'technical':
        navigate('/dashboard');
        break;
      case 'admin':
        navigate('/admin-dashboard');
        break;
      default:
        navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#55D6C2' }}>
      <Card className="w-96 bg-white/90 shadow-lg">
        <CardHeader className="text-center pb-4">
          <h1 className="text-2xl font-bold text-black">Helpdesk System</h1>
          <p className="text-sm text-gray-600">Sign up here</p>
        </CardHeader>
        <CardContent className="space-y-4 px-8 pb-8">
          <div>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger className="bg-white border-gray-300">
                <SelectValue placeholder="Select Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="user">User</SelectItem>
                <SelectItem value="operation">Operation Team</SelectItem>
                <SelectItem value="technical">Technical Support</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-white border-gray-300"
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white border-gray-300"
            />
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
          <Button 
            onClick={handleSignUp}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium"
          >
            Sign Up
          </Button>
          <div className="flex justify-between items-center text-sm">
            <Link to="/forgot-password" className="text-red-500 hover:underline">
              Forgot password
            </Link>
            <Link to="/signin" className="text-gray-600 hover:underline">
              Sign In
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
