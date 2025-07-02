
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { User } from 'lucide-react';

interface CloseTicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  ticketId: string;
}

const CloseTicketModal = ({ isOpen, onClose, ticketId }: CloseTicketModalProps) => {
  const [ticketNo, setTicketNo] = useState(ticketId);
  const [teamName, setTeamName] = useState('');
  const [teamMember, setTeamMember] = useState('');
  const [remark, setRemark] = useState('');

  const handleCloseTicket = () => {
    console.log('Closing ticket:', { ticketNo, teamName, teamMember, remark });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div 
            className="text-center font-['Sanchez'] text-[30px] leading-[38px] text-black"
            style={{
              position: 'absolute',
              width: '417.42px',
              height: '55.85px',
              left: '50%',
              top: '20px',
              transform: 'translateX(-50%)',
              fontFamily: 'Sanchez',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '30px',
              lineHeight: '38px',
              textAlign: 'center',
              color: '#000000'
            }}
          >
            My Ticket - Close Ticket
          </div>
        </DialogHeader>
        
        <div className="mt-16 bg-[#55D6C2] rounded-lg p-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">Ticket No.</label>
                <Input
                  value={ticketNo}
                  onChange={(e) => setTicketNo(e.target.value)}
                  className="bg-white"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">Team name</label>
                <Input
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  className="bg-white"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">Team Member</label>
                <div className="flex items-center space-x-2">
                  <Input
                    value={teamMember}
                    onChange={(e) => setTeamMember(e.target.value)}
                    className="bg-white flex-1"
                  />
                  <Button size="sm" className="bg-gray-600 hover:bg-gray-700">
                    <User className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-white text-sm font-medium mb-2">Remark</label>
              <Textarea
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
                className="bg-white h-32"
                placeholder="Enter remarks..."
              />
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            <Button
              onClick={handleCloseTicket}
              className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-2 rounded-lg"
            >
              🔄 Close Ticket
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CloseTicketModal;
