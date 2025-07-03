import React, { useState } from 'react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  // For feedback stars (static, not interactive)
  const renderStars = (rate = 0) => {
    return [1,2,3,4,5].map(i => (
      <span key={i} style={{ color: '#C4C4C4', fontSize: 22, marginRight: 2 }}>★</span>
    ));
  };

  if (isEditing) {
    return (
      <div className="w-full flex flex-col items-start" style={{ minHeight: 'calc(100vh - 64px)' }}>
        <div className="w-full">
          <div className="text-3xl font-normal mb-4 text-left ma-0" style={{ fontFamily: 'serif' }}>User Profile</div>
          <div className="bg-white p-0 rounded-none border border-gray-300" style={{ width: '100%', maxWidth: 1100 }}>
            <div className="flex">
              <button className="bg-[#55D6C2] text-black text-lg font-normal px-8 py-2" style={{ fontFamily: 'serif', borderRadius: 0, marginBottom: 0, marginLeft: 8, marginTop: 8 }}>Edit Account</button>
            </div>
            <div className="h-2" />
            <div className="grid grid-cols-2" style={{ borderCollapse: 'collapse', width: '100%' }}>
              <div className="flex flex-col w-full">
                {['Username','Current Password','New Password','Comfirm Password','Email','Real Name','Access Level','Project Access Level'].map((label, idx, arr) => (
                  <React.Fragment key={label}>
                    <div
                      className={
                        `text-black text-lg px-4 py-2 text-left` +
                        (idx % 2 === 0 ? ' bg-[#A3A3A3]' : ' bg-[#C4C4C4]')
                      }
                      style={{ borderBottom: '2px solid #E5E5E5', fontFamily: 'serif', borderRight: '1px solid #bbb' }}
                    >
                      {label}
                    </div>
                    {idx < arr.length - 1 && (
                      <div style={{ background: '#C4C4C4', height: 4, width: '100%' }} />
                    )}
                  </React.Fragment>
                ))}
                <div className="bg-[#D3D3D3] px-4 py-2 flex items-center" style={{ borderBottomLeftRadius: 0, height: 48, borderRight: '1px solid #bbb' }}>
                  <button className="bg-[#55D6C2] text-black text-lg px-8 py-2" style={{ fontFamily: 'serif', borderRadius: 4 }}>Update User</button>
                </div>
              </div>
              <div className="flex flex-col w-full">
                {['Username','','','','user@email.com','Real Name','User','Basic'].map((val, idx, arr) => (
                  <React.Fragment key={idx}>
                    <input
                      className="bg-white px-4 py-2 text-lg border-none outline-none focus:outline-blue-500"
                      style={{ borderBottom: '2px solid #E5E5E5', fontFamily: 'serif' }}
                      defaultValue={val}
                      type={idx > 0 && idx < 4 ? 'password' : 'text'}
                    />
                    {idx < arr.length - 1 && (
                      <div style={{ background: '#C4C4C4', height: 4, width: '100%' }} />
                    )}
                  </React.Fragment>
                ))}
                <div className="bg-[#D3D3D3] px-4 py-2" style={{ borderBottomRightRadius: 0, height: 48 }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Profile view
  return (
    <div className="w-full flex flex-col items-center" style={{ minHeight: 'calc(100vh - 64px)' }}>
      <div className="w-full">
        <div className="text-3xl font-normal text-left" style={{ fontFamily: 'serif' }}>User Profile</div>
        <div className="bg-[#7EE1DB] p-0 pt-8 rounded-none flex items-start mx-auto" style={{ minHeight: 400, height: 500, maxWidth: 1100 }}>
          {/* Profile Card */}
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center relative ml-9" style={{ width: 450, minHeight: 370 }}>
            <div className="absolute top-4 right-4 cursor-pointer" onClick={() => setIsEditing(true)}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19.5 3 21l1.5-4L16.5 3.5z"/></svg>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-[#C4C4C4] w-32 h-32 flex items-center justify-center mb-6">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="#222"><circle cx="12" cy="8" r="4"/><path d="M12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z"/></svg>
              </div>
              <div className="text-lg text-black text-left w-full" style={{ fontFamily: 'serif' }}>
                Username<br />Contact Number<br />Email<br />Department
              </div>
            </div>
          </div>
          {/* Feedback Card */}
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center ml-12" style={{ width: 370, minHeight: 140 }}>
            <div className="text-lg font-normal text-center" style={{ fontFamily: 'serif' }}>Give Your Feedback</div>
            <div className="w-full bg-[#A3A3A3] text-white text-center py-2 mb-2" style={{ fontFamily: 'serif' }}>[Lorem Ipsum]</div>
            <div className="flex justify-center mb-4">{renderStars()}</div>
            <button className="bg-[#55D6C2] text-black text-lg rounded-md px-8 py-2 w-full" style={{ fontFamily: 'serif' }}>Submit Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
