import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import ReCAPTCHA from 'react-google-recaptcha';
import { Paperclip } from 'lucide-react';

const SITE_KEY = '6LeI3XQrAAAAAAaS4MGL1505OJXWfJNzaPglRfOt';

const NewTicket = () => {
  const [formData, setFormData] = useState({
    ticketNo: '',
    name: '',
    date: '',
    department: '',
    subject: '',
    category: '',
    type: '',
    priority: '',
    description: '',
    file: null as File | null,
  });

  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData(prev => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const handleCaptcha = (value: string | null) => {
    setCaptchaVerified(!!value);
  };

  const handleSubmit = () => {
    if (!captchaVerified) {
      alert('Please verify you are not a robot.');
      return;
    }

    console.log('Ticket submitted:', formData);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-center text-gray-800">Create New Ticket</h1>

      <Card>
        <CardContent className="p-6">
          {/* Ticket No, Date, Name, Department side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex items-center gap-4">
              <Label className="w-32 text-right">Ticket No.</Label>
              <Input
                value={formData.ticketNo}
                onChange={(e) => handleInputChange('ticketNo', e.target.value)}
                className="bg-gray-100 flex-1"
              />
            </div>
            <div className="flex items-center gap-4">
              <Label className="w-32 text-right">Date:</Label>
              <Input
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                className="bg-gray-100 flex-1"
              />
            </div>
            <div className="flex items-center gap-4">
              <Label className="w-32 text-right">Name:</Label>
              <Input
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="bg-gray-100 flex-1"
              />
            </div>
            <div className="flex items-center gap-4">
              <Label className="w-32 text-right">Department:</Label>
              <Input
                value={formData.department}
                onChange={(e) => handleInputChange('department', e.target.value)}
                className="bg-gray-100 flex-1"
              />
            </div>
          </div>

          {/* Subject full-width */}
          <div className="mb-6">
            <Label>Subject:</Label>
            <Input
              value={formData.subject}
              onChange={(e) => handleInputChange('subject', e.target.value)}
              className="bg-gray-100 w-full"
            />
          </div>

          {/* Category, Type, Priority on left and Description on right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label>Category:</Label>
                <Input
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  className="bg-gray-100"
                />
              </div>
              <div>
                <Label>Type:</Label>
                <Input
                  value={formData.type}
                  onChange={(e) => handleInputChange('type', e.target.value)}
                  className="bg-gray-100"
                />
              </div>
              <div>
                <Label>Priority:</Label>
                <Input
                  value={formData.priority}
                  onChange={(e) => handleInputChange('priority', e.target.value)}
                  className="bg-gray-100"
                />
              </div>
            </div>

            <div className="space-y-2 relative w-full">
              <Label>Description:</Label>
              <div className="relative w-full" style={{ width: '100%', height: '252px' }}>
                <Textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className="bg-gray-100 w-full h-full resize-none pr-16"
                  style={{ width: '100%', height: '252px' }}
                />
                <label
                  className="absolute bg-[#55D6C2] hover:bg-[#4BC5B1] text-white rounded cursor-pointer flex items-center justify-center"
                  style={{
                    width: '54.39px',
                    height: '47.51px',
                    bottom: '8px',
                    right: '8px',
                  }}
                >
                  <Paperclip className="w-5 h-5" />
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* CAPTCHA and Submit */}
          <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <ReCAPTCHA sitekey={SITE_KEY} onChange={handleCaptcha} />
            <Button
              onClick={handleSubmit}
              disabled={!captchaVerified}
              className="bg-[#55D6C2] hover:bg-[#4BC5B1] text-white px-8"
            >
              Submit
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewTicket;
