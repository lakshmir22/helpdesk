import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import ReCAPTCHA from 'react-google-recaptcha';
import { Paperclip } from 'lucide-react';

const SITE_KEY = '6LeI3XQrAAAAAAaS4MGL1505OJXWfJNzaPglRfOt';

const LABEL_WIDTH = '120px';

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
    <div className="min-h-screen w-full flex flex-col items-center" >
      <div
        className="flex flex-col mt-0"
        style={{ width: 984, minWidth: 984 }}
      >
        <div className="flex flex-col px-12 pt-0 pb-0">
          <h1 className="text-3xl font-normal text-center mb-6" style={{ fontFamily: 'serif', color: 'black' }}>Create New Ticket</h1>
          <form className="flex flex-col" onSubmit={e => { e.preventDefault(); handleSubmit(); }}>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-3">
              {/* Ticket No. and Date (top row) */}
              <div className="flex items-center">
                <Label className="text-base font-normal text-right mr-2" style={{ width: LABEL_WIDTH }}>Ticket No.</Label>
                <Input value={formData.ticketNo} onChange={e => handleInputChange('ticketNo', e.target.value)} className="rounded-md shadow-sm h-8 flex-1" style={{ background: '#C4C4C4', boxShadow: '0 2px 4px #C4C4C4' }} />
              </div>
              <div className="flex items-center">
                <Label className="text-base font-normal text-right mr-2" style={{ width: LABEL_WIDTH }}>Date:</Label>
                <Input type="date" value={formData.date} onChange={e => handleInputChange('date', e.target.value)} className="rounded-md shadow-sm h-8 flex-1" style={{ background: '#C4C4C4', boxShadow: '0 2px 4px #C4C4C4' }} />
              </div>
              {/* Name and Department (bottom row) */}
              <div className="flex items-center">
                <Label className="text-base font-normal text-right mr-2" style={{ width: LABEL_WIDTH }}>Name:</Label>
                <Input value={formData.name} onChange={e => handleInputChange('name', e.target.value)} className="rounded-md shadow-sm h-8 flex-1" style={{ background: '#C4C4C4', boxShadow: '0 2px 4px #C4C4C4' }} />
              </div>
              <div className="flex items-center">
                <Label className="text-base font-normal text-right mr-2" style={{ width: LABEL_WIDTH }}>Department:</Label>
                <Input value={formData.department} onChange={e => handleInputChange('department', e.target.value)} className="rounded-md shadow-sm h-8 flex-1" style={{ background: '#C4C4C4', boxShadow: '0 2px 4px #C4C4C4' }} />
              </div>
              {/* Subject (full width) */}
              <div className="col-span-2 flex flex-col">
                <Label className="mb-1 text-base font-normal">Subject:</Label>
                <Input value={formData.subject} onChange={e => handleInputChange('subject', e.target.value)} className="rounded-md shadow-sm h-8" style={{ background: '#C4C4C4', boxShadow: '0 2px 4px #C4C4C4' }} />
              </div>
              {/* Category/Type/Priority and Description */}
              <div className="flex flex-col gap-2">
                <div>
                  <Label className="mb-1 text-base font-normal">Category:</Label>
                  <Input value={formData.category} onChange={e => handleInputChange('category', e.target.value)} className="rounded-md shadow-sm h-8" style={{ background: '#C4C4C4', boxShadow: '0 2px 4px #C4C4C4' }} />
                </div>
                <div>
                  <Label className="mb-1 text-base font-normal">Type:</Label>
                  <Input value={formData.type} onChange={e => handleInputChange('type', e.target.value)} className="rounded-md shadow-sm h-8" style={{ background: '#C4C4C4', boxShadow: '0 2px 4px #C4C4C4' }} />
                </div>
                <div>
                  <Label className="mb-1 text-base font-normal">Priority:</Label>
                  <Input value={formData.priority} onChange={e => handleInputChange('priority', e.target.value)} className="rounded-md shadow-sm h-8" style={{ background: '#C4C4C4', boxShadow: '0 2px 4px #C4C4C4' }} />
                </div>
              </div>
              <div className="flex flex-col">
                <Label className="mb-1 text-base font-normal">Description:</Label>
                <div className="relative flex-1">
                  <Textarea value={formData.description} onChange={e => handleInputChange('description', e.target.value)} className="rounded-md shadow-sm resize-none h-40 pr-12" style={{ background: '#C4C4C4', boxShadow: '0 2px 4px #C4C4C4', minHeight: 120 }} />
                  <label className="absolute bg-[#55D6C2] hover:bg-[#4BC5B1] text-white rounded cursor-pointer flex items-center justify-center" style={{ width: 32, height: 32, bottom: 8, right: 8 }}>
                    <Paperclip className="w-5 h-5" />
                    <input type="file" onChange={handleFileChange} className="hidden" />
                  </label>
                </div>
              </div>
            </div>
            {/* CAPTCHA and Submit button below fields */}
            <div className="flex flex-row items-center justify-between mt-8 mb-4" style={{ maxWidth: 500 }}>
              <div className="flex items-center">
                <div className="bg-white border border-gray-300 rounded-md p-3 flex items-center" style={{ minWidth: 300 }}>
                  <ReCAPTCHA sitekey={SITE_KEY} onChange={handleCaptcha} />
                </div>
              </div>
              <Button type="submit" className="rounded-md text-lg font-normal px-16 py-2 ml-4" style={{ background: '#E5E5E5', color: 'black', boxShadow: '0 2px 4px #0001' }}>
                Submit
              </Button>
            </div>
          </form>
          {/* Footer directly below form */}
          <div className="w-full text-center py-2 text-xs text-black bg-[#55D6C2] rounded-b-lg mt-2" style={{ fontFamily: 'serif' }}>Footer Area</div>
        </div>
      </div>
    </div>
  );
};

export default NewTicket;
