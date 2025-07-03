import React, { useState } from 'react';

const BM_BI_SVG = (
  <svg width="98.5" height="30" viewBox="0 0 99 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M49.25 38.2222V2.54815H86.1875C87.8202 2.54815 89.3861 2.81661 90.5406 3.29448C91.6951 3.77235 92.3438 4.42049 92.3438 5.0963V35.6741C92.3438 36.3499 91.6951 36.998 90.5406 37.4759C89.3861 37.9538 87.8202 38.2222 86.1875 38.2222H49.25ZM86.1875 40.7704C89.453 40.7704 92.5847 40.2334 94.8938 39.2777C97.2028 38.322 98.5 37.0257 98.5 35.6741V5.0963C98.5 3.74467 97.2028 2.44841 94.8938 1.49267C92.5847 0.53693 89.453 0 86.1875 0L12.3125 0C9.04702 0 5.91529 0.53693 3.60625 1.49267C1.29721 2.44841 0 3.74467 0 5.0963L0 35.6741C0 37.0257 1.29721 38.322 3.60625 39.2777C5.91529 40.2334 9.04702 40.7704 12.3125 40.7704H86.1875Z" fill="black"/>
    <path d="M9.65479 28.3778V15.5809H14.1372C15.6899 15.5809 16.8677 15.8798 17.6704 16.4774C18.4731 17.0692 18.8745 17.9393 18.8745 19.0878C18.8745 19.7147 18.7134 20.2684 18.3911 20.7489C18.0688 21.2235 17.6206 21.5721 17.0464 21.7948C17.7026 21.9589 18.2183 22.2899 18.5933 22.788C18.9741 23.286 19.1646 23.8954 19.1646 24.6161C19.1646 25.8466 18.772 26.7782 17.9868 27.411C17.2017 28.0438 16.0825 28.3661 14.6294 28.3778H9.65479ZM12.2915 22.8055V26.2596H14.5503C15.1714 26.2596 15.6548 26.1132 16.0005 25.8202C16.3521 25.5214 16.5278 25.1112 16.5278 24.5897C16.5278 23.4178 15.9214 22.8231 14.7085 22.8055H12.2915ZM12.2915 20.9423H14.2427C15.5728 20.9188 16.2378 20.3885 16.2378 19.3514C16.2378 18.7714 16.0679 18.3553 15.728 18.1034C15.394 17.8456 14.8638 17.7167 14.1372 17.7167H12.2915V20.9423ZM24.5962 15.5809L27.8833 24.8622L31.1528 15.5809H34.6157V28.3778H31.9702V24.8798L32.2339 18.8417L28.7798 28.3778H26.9692L23.5239 18.8505L23.7876 24.8798V28.3778H21.1509V15.5809H24.5962Z" fill="white"/>
    <path d="M61.9448 28.3778V15.5809H66.4272C67.98 15.5809 69.1577 15.8798 69.9604 16.4774C70.7632 17.0692 71.1646 17.9393 71.1646 19.0878C71.1646 19.7147 71.0034 20.2684 70.6812 20.7489C70.3589 21.2235 69.9106 21.5721 69.3364 21.7948C69.9927 21.9589 70.5083 22.2899 70.8833 22.788C71.2642 23.286 71.4546 23.8954 71.4546 24.6161C71.4546 25.8466 71.062 26.7782 70.2769 27.411C69.4917 28.0438 68.3726 28.3661 66.9194 28.3778H61.9448ZM64.5815 22.8055V26.2596H66.8403C67.4614 26.2596 67.9448 26.1132 68.2905 25.8202C68.6421 25.5214 68.8179 25.1112 68.8179 24.5897C68.8179 23.4178 68.2114 22.8231 66.9985 22.8055H64.5815ZM64.5815 20.9423H66.5327C67.8628 20.9188 68.5278 20.3885 68.5278 19.3514C68.5278 18.7714 68.3579 18.3553 68.0181 18.1034C67.6841 17.8456 67.1538 17.7167 66.4272 17.7167H64.5815V20.9423ZM76.2446 28.3778H73.6079V15.5809H76.2446V28.3778Z" fill="black"/>
  </svg>
);

const HEADER_BOX_STYLE = {
  width: '1021px',
  height: '40px',
  boxSizing: 'border-box',
  marginLeft: '-16px',
  marginBottom: '0',
  padding: 14,
  display: 'flex',
  alignItems: 'center',
  
};

const sections = [
  {
    key: 'general',
    label: 'General',
    content: (
      <>
        <div className="flex items-center justify-between px-10 py-2 bg-[#ededed]">
          <span>Language</span>
          <span style={{ width: '90px', height: '28px', display: 'flex', alignItems: 'center' }}>{BM_BI_SVG}</span>
        </div>
        <div className="flex items-center justify-between px-10 py-2 bg-[#ededed] border-t border-[#ededed]">
          <span>Data Backup</span>
          <input type="checkbox" checked readOnly className="accent-black w-4 h-4" />
        </div>
      </>
    ),
  },
  {
    key: 'connect',
    label: 'Connect To',
    content: (
      <>
        <div className="flex items-center justify-between px-10 py-2 bg-[#ededed]">
          <span>GoDash</span>
          <input type="checkbox" checked readOnly className="accent-black w-4 h-4" />
        </div>
        <div className="flex items-center justify-between px-10 py-2 bg-[#ededed] border-t border-[#ededed]">
          <span>SuperController</span>
          <input type="checkbox" checked readOnly className="accent-black w-4 h-4" />
        </div>
      </>
    ),
  },
  {
    key: 'email',
    label: 'Email',
    content: (
      <div className="flex items-center justify-between px-10 py-2 bg-[#ededed]">
        <span>Enable SMTP</span>
        <input type="checkbox" checked readOnly className="accent-black w-4 h-4" />
      </div>
    ),
  },
  {
    key: 'authorization',
    label: 'Authorization',
    content: (
      <>
        <div className="flex items-center justify-between px-10 py-2 bg-[#ededed]">
          <span>Edit authorization</span>
          <input type="checkbox" checked readOnly className="accent-black w-4 h-4" />
        </div>
        <div className="flex items-center justify-between px-10 py-2 bg-[#ededed] border-t border-[#ededed]">
          <span>Authority Level</span>
          <div className="flex items-center bg-[#d9d9d9] rounded-sm px-2 py-1">
            <span className="text-xs text-black font-bold mr-2">8</span>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6 6L11 1" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </>
    ),
  },
  {
    key: 'notification',
    label: 'Notification',
    content: (
      <div className="flex items-center justify-between px-10 py-2 bg-[#ededed]">
        <span>Enable Notification</span>
        <input type="checkbox" checked readOnly className="accent-black w-4 h-4" />
      </div>
    ),
  },
];

const AdminSettings = () => {
  const [open, setOpen] = useState({
    general: true,
    connect: true,
    email: true,
    authorization: true,
    notification: true,
  });

  const toggle = (key: string) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white min-h-screen w-full">
      <h1 className="text-2xl font-normal pt-6 pl-6 pb-4">Setting</h1>
      <div className="max-w-3xl mx-auto">
        {sections.map((section) => (
          <div key={section.key} className="mb-2">
            <div className="flex items-center" style={{ position: 'relative' }}>
              <button
                className="text-left bg-[#2ecfc8] text-black font-medium flex items-center rounded-none shadow-none border-none focus:outline-none focus:ring-2 focus:ring-[#1ca7a0]"
                style={HEADER_BOX_STYLE}
                onClick={() => toggle(section.key)}
                type="button"
              >
                <span className="mr-2">{section.label}</span>
                <svg
                  className={`transition-transform duration-200 ${open[section.key] ? 'rotate-180' : ''}`}
                  width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 1L9 9L17 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            {open[section.key] && (
              <div className="overflow-hidden animate-fadeIn">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminSettings;
