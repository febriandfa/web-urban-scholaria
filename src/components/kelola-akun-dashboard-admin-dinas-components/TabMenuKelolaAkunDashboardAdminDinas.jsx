import React from "react";

const TabMenuKelolaAkunDashboardAdminDinas = ({ activeTab, handleTabClick }) => {
  const tabitem = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
          <path
            d="M7.05781 7.20002C8.3833 7.20002 9.45781 6.12551 9.45781 4.80002C9.45781 3.47454 8.3833 2.40002 7.05781 2.40002C5.73233 2.40002 4.65781 3.47454 4.65781 4.80002C4.65781 6.12551 5.73233 7.20002 7.05781 7.20002Z"
            fill="currentColor"
          />
          <path d="M7.05781 8.80002C9.70878 8.80002 11.8578 10.9491 11.8578 13.6H2.25781C2.25781 10.9491 4.40685 8.80002 7.05781 8.80002Z" fill="currentColor" />
          <path
            d="M13.4578 5.60002C13.4578 5.1582 13.0996 4.80002 12.6578 4.80002C12.216 4.80002 11.8578 5.1582 11.8578 5.60002V6.40002H11.0578C10.616 6.40002 10.2578 6.7582 10.2578 7.20002C10.2578 7.64185 10.616 8.00002 11.0578 8.00002H11.8578V8.80002C11.8578 9.24185 12.216 9.60003 12.6578 9.60003C13.0996 9.60003 13.4578 9.24185 13.4578 8.80002V8.00002H14.2578C14.6996 8.00002 15.0578 7.64185 15.0578 7.20002C15.0578 6.7582 14.6996 6.40002 14.2578 6.40002H13.4578V5.60002Z"
            fill="currentColor"
          />
        </svg>
      ),
      title: "Butuh Aktivasi",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M7.19687 4.80002C7.19687 6.12551 6.12236 7.20002 4.79687 7.20002C3.47139 7.20002 2.39687 6.12551 2.39687 4.80002C2.39687 3.47454 3.47139 2.40002 4.79687 2.40002C6.12236 2.40002 7.19687 3.47454 7.19687 4.80002Z"
            fill="currentColor"
          />
          <path
            d="M13.5969 4.80002C13.5969 6.12551 12.5224 7.20002 11.1969 7.20002C9.87139 7.20002 8.79687 6.12551 8.79687 4.80002C8.79687 3.47454 9.87139 2.40002 11.1969 2.40002C12.5224 2.40002 13.5969 3.47454 13.5969 4.80002Z"
            fill="currentColor"
          />
          <path
            d="M10.3402 13.6C10.3776 13.3387 10.3969 13.0716 10.3969 12.8C10.3969 11.4919 9.94835 10.2885 9.19668 9.33528C9.78507 8.99486 10.4682 8.80002 11.1969 8.80002C13.406 8.80002 15.1969 10.5909 15.1969 12.8V13.6H10.3402Z"
            fill="currentColor"
          />
          <path d="M4.79687 8.80002C7.00601 8.80002 8.79687 10.5909 8.79687 12.8V13.6H0.796875V12.8C0.796875 10.5909 2.58774 8.80002 4.79687 8.80002Z" fill="currentColor" />
        </svg>
      ),
      title: "Pengguna Aktif",
    },
  ];

  return (
    <div className="flex mb-10">
      {tabitem.map((tabItem, index) => (
        <div
          key={index}
          className={`flex items-center gap-2 py-4 pl-3 w-full  cursor-pointer ${index === activeTab ? "text-brand-500 border-b-4 border-brand-500" : "text-neutral-500 border-b-2 border-neutral-500"}`}
          onClick={() => handleTabClick(index)}
        >
          {tabItem.icon}
          <p className="text-sm font-semibold">{tabItem.title}</p>
        </div>
      ))}
    </div>
  );
};

export default TabMenuKelolaAkunDashboardAdminDinas;
