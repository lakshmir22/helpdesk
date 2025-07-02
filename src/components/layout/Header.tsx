
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User, Bell, Settings } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem('userRole');

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    navigate('/signin');
  };

  const handleProfileClick = () => {
    switch (userRole) {
      case 'admin':
        navigate('/admin-profile');
        break;
      case 'technical':
      case 'operation':
      case 'user':
      default:
        navigate('/profile');
        break;
    }
  };

  const handleSettingsClick = () => {
    switch (userRole) {
      case 'admin':
        navigate('/admin-settings');
        break;
      case 'technical':
      case 'operation':
      case 'user':
      default:
        navigate('/profile');
        break;
    }
  };

  return (
    <header className="bg-[#55D6C2] text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold italic">Helpdesk</h1>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-black hover:bg-white/20 p-2"
            onClick={handleProfileClick}
          >
            <User className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-black hover:bg-white/20 p-2"
          >
            <Bell className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-black hover:bg-white/20 p-2"
            onClick={handleSettingsClick}
          >
            <Settings className="h-4 w-4" />
          </Button>
          <Button 
            onClick={handleLogout}
            variant="ghost" 
            size="sm" 
            className="text-white hover:bg-white/20 ml-4"
          >
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
