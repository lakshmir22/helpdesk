import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const technicalSupportSVG = (
  <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <rect x="0.75" width="30" height="30" fill="url(#pattern0_124_2472)"/>
    <defs>
      <pattern id="pattern0_124_2472" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_124_2472" transform="scale(0.0333333)"/>
      </pattern>
      <image id="image0_124_2472" width="30" height="30" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABs0lEQVRIie3WsWsVQRDH8U8CPgRjIgQUsVBrsUul2GqCTVALRRSSQlJYpEilhYi1jX+FiPoPqJVVilhpYTAmJlZaJEIISCSX4vaRl+P2bu/ysNEfDMfN3Mx3du9ud/mvcg3jHl72+DaxiBe4jcP9BHbwCOvIgnWVFWwF1/sBPYOFEkAM3LUnGGgLPY3lSOE6cIa5NtAOPlQUTQFvY6wp+HFN0RRwhrdNoCPY6BM4w/kYaLBwfyvA+6XoV14EX64o8hVTPfd3gq9KF2vi+4qXTdkSTpY8fwJfIjkZVlPBm5ECkyF+Fd+xhongu1kBzuyfpai2IsnDIb5WMprjNeDfuFQEFd/xj5TuCtquiXfwCmerHnqtvOtrIT4hH/UqxoNvPJJTtPkq8FQkaRHHIjmDeJoAflcFPoKfkcTP8v9yJDRxAw/sbQj38ack7xkuSNg4ZhK677Xn9vbiTmimbKWr1QDeNIS/D1A42hYMo/jYEP4QQ+Ha9e00BcMp+WLRBF60b23AcPeA4Nm24NGWwE+YbgvtKhX2S37eOndQYFPwlSZFU06Dqb/EIfkC8tfBrY+0/4Z2Ac0pM8fOfulLAAAAAElFTkSuQmCC"/>
    </defs>
  </svg>
);

const menuItems = [
  {
    icon: <img src="/image.png" alt="Dashboard" className="w-6 h-6" />,
    label: 'Dashboard',
    path: '/admin-dashboard',
  },
  {
    icon: (
      <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 0.266602C6.265 0.266602 0 3.34938 0 7.15549C0 10.9616 6.265 14.0444 14 14.0444C21.735 14.0444 28 10.9616 28 7.15549C28 3.34938 21.735 0.266602 14 0.266602ZM0 10.5999V15.7666C0 19.5727 6.265 22.6555 14 22.6555C21.735 22.6555 28 19.5727 28 15.7666V10.5999C28 14.406 21.735 17.4888 14 17.4888C6.265 17.4888 0 14.406 0 10.5999ZM0 19.211V24.3777C0 28.1838 6.265 31.2666 14 31.2666C21.735 31.2666 28 28.1838 28 24.3777V19.211C28 23.0172 21.735 26.0999 14 26.0999C6.265 26.0999 0 23.0172 0 19.211Z" fill="black"/>
      </svg>
    ),
    label: 'Database',
    path: '/admin-database',
    dropdown: [
      {
        icon: <span className="w-5 h-5 inline-block" />, // Placeholder for User icon
        label: 'User',
        path: '/admin-database',
      },
      {
        icon: <span className="w-5 h-5 inline-block" />, // Placeholder for Operation Team icon
        label: 'Operation Team',
        path: '/admin-database/operation',
      },
      {
        icon: technicalSupportSVG,
        label: 'Technical Support',
        path: '/admin-database/technical',
      },
    ],
  },
  {
    icon: (
      <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.4998 9.8666C18.299 9.8666 20.0244 10.5409 21.2966 11.7411C22.5688 12.9414 23.2835 14.5692 23.2835 16.2666C23.2835 17.964 22.5688 19.5919 21.2966 20.7921C20.0244 21.9923 18.299 22.6666 16.4998 22.6666C14.7007 22.6666 12.9752 21.9923 11.7031 20.7921C10.4309 19.5919 9.71616 17.964 9.71616 16.2666C9.71616 14.5692 10.4309 12.9414 11.7031 11.7411C12.9752 10.5409 14.7007 9.8666 16.4998 9.8666ZM16.4998 13.0666C15.6003 13.0666 14.7375 13.4037 14.1014 14.0039C13.4654 14.604 13.108 15.4179 13.108 16.2666C13.108 17.1153 13.4654 17.9292 14.1014 18.5293C14.7375 19.1295 15.6003 19.4666 16.4998 19.4666C17.3994 19.4666 18.2621 19.1295 18.8982 18.5293C19.5343 17.9292 19.8917 17.1153 19.8917 16.2666C19.8917 15.4179 19.5343 14.604 18.8982 14.0039C18.2621 13.4037 17.3994 13.0666 16.4998 13.0666ZM13.108 32.2666C12.684 32.2666 12.3279 31.9786 12.26 31.5946L11.6325 27.3546C10.5641 26.9546 9.64832 26.4106 8.76645 25.7706L4.54361 27.3866C4.1705 27.5146 3.71261 27.3866 3.5091 27.0346L0.117257 21.4986C0.0134591 21.3337 -0.0231334 21.1389 0.0143224 20.9504C0.0517781 20.7619 0.160717 20.5928 0.320767 20.4746L3.89916 17.8186L3.78044 16.2666L3.89916 14.6666L0.320767 12.0586C0.160717 11.9404 0.0517781 11.7713 0.0143224 11.5828C-0.0231334 11.3943 0.0134591 11.1995 0.117257 11.0346L3.5091 5.4986C3.71261 5.1466 4.1705 5.0026 4.54361 5.1466L8.76645 6.7466C9.64832 6.1226 10.5641 5.5786 11.6325 5.1786L12.26 0.938602C12.3279 0.554602 12.684 0.266602 13.108 0.266602H19.8917C20.3157 0.266602 20.6718 0.554602 20.7396 0.938602L21.3671 5.1786C22.4356 5.5786 23.3513 6.1226 24.2332 6.7466L28.4561 5.1466C28.8292 5.0026 29.2871 5.1466 29.4906 5.4986L32.8824 11.0346C33.1029 11.3866 33.0011 11.8186 32.6789 12.0586L29.1005 14.6666L29.2192 16.2666L29.1005 17.8666L32.6789 20.4746C33.0011 20.7146 33.1029 21.1466 32.8824 21.4986L29.4906 27.0346C29.2871 27.3866 28.8292 27.5306 28.4561 27.3866L24.2332 25.7866C23.3513 26.4106 22.4356 26.9546 21.3671 27.3546L20.7396 31.5946C20.6718 31.9786 20.3157 32.2666 19.8917 32.2666H13.108ZM15.2279 3.4666L14.6004 7.6426C12.5653 8.0426 10.7676 9.0666 9.46177 10.4906L5.37461 8.8266L4.10267 10.9066L7.68106 13.3866C7.00269 15.2533 7.00269 17.2799 7.68106 19.1466L4.08571 21.6426L5.35765 23.7226L9.47873 22.0586C10.7846 23.4666 12.5653 24.4906 14.5834 24.8746L15.2109 29.0666H17.7887L18.4162 24.8906C20.4344 24.4906 22.2151 23.4666 23.5209 22.0586L27.642 23.7226L28.914 21.6426L25.3186 19.1626C25.997 17.2906 25.997 15.2586 25.3186 13.3866L28.897 10.9066L27.6251 8.8266L23.5379 10.4906C22.2053 9.03512 20.3976 8.03888 18.3993 7.6586L17.7718 3.4666H15.2279Z" fill="black"/>
      </svg>
    ),
    label: 'Setting',
    path: '/admin-settings',
  },
  {
    icon: (
      <svg width="30" height="37" viewBox="0 0 30 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.6667 4.2666V32.2666H3.33333V4.2666H26.6667ZM30 0.266602H0V36.2666H30V0.266602ZM23.3333 28.2666H6.66667V26.2666H23.3333V28.2666ZM23.3333 24.2666H6.66667V22.2666H23.3333V24.2666ZM23.3333 18.2666H6.66667V8.2666H23.3333V18.2666Z" fill="black"/>
      </svg>
    ),
    label: 'User Log Activities',
    path: '/admin-user-log',
  },
];

const AdminSidebar = () => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <div className="w-58 min-h-screen border-r" style={{ background: '#C4C4C4' }}>
      <div className="p-7">
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <div key={item.label}>
              {item.dropdown ? (
                <>
                  <button
                    className={cn(
                      "flex items-center space-x-0 px-4 py-3 rounded-lg transition-colors relative w-full text-left",
                      location.pathname.startsWith(item.path)
                        ? "text-black-00 font-medium"
                        : "text-gray-700 hover:bg-gray-200"
                    )}
                    onClick={() => handleDropdown(item.label)}
                  >
                    {location.pathname.startsWith(item.path) && (
                      <span className="absolute -left-2 font-bold text-lg">{'>'}</span>
                    )}
                    {item.icon}
                    <span className="ml-2">{item.label}</span>
                    <svg className="ml-auto w-4 h-4" viewBox="0 0 20 20" fill="none"><path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  {openDropdown === item.label && (
                    <div className="ml-8 mt-1 space-y-1">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.path}
                          className={cn(
                            "flex items-center px-2 py-2 rounded transition-colors",
                            location.pathname === sub.path
                              ? "text-black-00 font-semibold bg-[#e0e0e0]"
                              : "text-gray-700 hover:bg-gray-200"
                          )}
                        >
                          {sub.icon}
                          <span className="ml-2">{sub.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center space-x-0 px-4 py-3 rounded-lg transition-colors relative",
                    location.pathname === item.path
                      ? "text-black-00 font-medium"
                      : "text-gray-700 hover:bg-gray-200"
                  )}
                >
                  {location.pathname === item.path && (
                    <span className="absolute -left-2 font-bold text-lg">{'>'}</span>
                  )}
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default AdminSidebar;
