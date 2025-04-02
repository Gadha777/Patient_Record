import React, { useState } from 'react';

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <div className="bg-blue-900 text-white flex items-center p-4 relative">
        {/* Left Side - Hamburger Menu */}
        <button className="text-white text-2xl" onClick={toggleSidebar}>
          &#9776;
        </button>

        {/* Center - Logo */}
        <img src="../public/image.png" alt="Oncolab Diagnostics" className="h-12 ml-10" />
        
        {/* Right Side - Name */}
        <div className="flex items-end ml-auto">
          <img src="../public/profile.png" alt="Profile" className="h-10 w-10" />
          <span className="mb-2 ml-2 text-xl">THOMAS</span>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-800 text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div>
        <button className="text-white text-2xl  ml-[230px]" onClick={toggleSidebar}>
          &times;
        </button>
          <h2 className='mt-[-20px] ml-6'>Primary Menu</h2>
        </div>
        <ul className="mt-4">

          <li className="p-2 ml-2">Rider Tracking</li>
<Link href="/Workstaion">
<li className="p-2 ml-2">Workstation Master</li>
</Link>          <li className="p-2 ml-2 ">Yearly Consolidated Report</li>
          <li className="p-4 border-b border-white">Financial MIS Reports</li>
          <li className="p-4 border-b border-white">Invoice MIS Reports</li>
          <li className="p-4 border-b border-white">Clinical MIS Reports</li>
          <li className="p-4 border-b border-white">Revenue MIS Reports</li>
          <li className="p-4 border-b border-white">Operational MIS Reports</li>
        </ul>
      </div>

      {/* Actions */}
      <div className="flex bg-blue-800 text-white p-4">
        {["Create", "Save", "Print", "Email", "Clear", "Dispatch", "Fetch", "Issues", "Close"].map(
          (action) => (
            <button key={action} className="px-4 border-r border-white py-2 bg-transparent hover:bg-blue-700">
              {action}
            </button>
          )
        )}
        {/* Message Container */}
        <div className="ml-4 text-yellow-400 w-[500px] text-sm overflow-hidden">
          <p className="whitespace-nowrap" style={{ animation: 'marquee 15s linear infinite' }}>
            *Dear Customer, Please note that there is an outstanding Payment and the last due is 23-3-2025. Kindly make the Payment to be available for our support service*
          </p>
        </div>
      </div>
    </div>
  );
};