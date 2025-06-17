import React from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import TopBarHRM from './TopBar';
import NavBarHRM from './NavBar';
import SideBarHR from './SideBarHR';
import SideBarEmployees from './Employees/SideBarEmployees';
import SideBarPayroll from './Payroll/SideBarPayroll';
import SideBarLeaves from './Leaves/SideBarLeaves';

export default function HRMLayout() {

  const location = useLocation();
  const path = location.pathname;

  let SidebarComponent;

  if (path.startsWith('/HRM/Leaves')) {
    SidebarComponent = <SideBarLeaves />;
  } else if (path.startsWith('/HRM/Payroll')) {
    SidebarComponent = <SideBarPayroll />;
    } else if (path.startsWith('/HRM/Employees')) {
    SidebarComponent = <SideBarEmployees />;
  } else {
    SidebarComponent = <SideBarHR />;
  }

  return (
    <>
      <TopBarHRM />
      <NavBarHRM />
      <div className="d-flex" style={{ height: '88vh' }}>
        {/* <SideBarHRM /> */}
        {SidebarComponent}

        <div className="flex-grow-1 p-4" style={{ backgroundColor: '#f0f0f0' }}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
