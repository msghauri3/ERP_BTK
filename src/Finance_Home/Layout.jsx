import React from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import TopBarFinance from './TopBar';
import NavBarFinance from './NavBar';
import SideBarGL from './General_Ledger/SideBarGL';
import SideBarAP from './Accounts_Payable/SideBarAP';
import SideBarAR from './Accounts_Receivable/SideBarAR';
import SideBarAM from './Asset_Management/SideBarAM';
import SideBarTM from './Tax_Management/SideBarTM';
import SideBarFR from './Financial_Reporting/SideBarFR';
import SideBarFinance from './SideBarFinance';

export default function FinanceLayout() {

  const location = useLocation();
  const path = location.pathname;

  let SidebarComponent;

  if (path.startsWith('/Finance/GeneralLedger')) {
    SidebarComponent = <SideBarGL />;
  } else if (path.startsWith('/Finance/AccountsPayable')) {
    SidebarComponent = <SideBarAP />;
  } else if (path.startsWith('/Finance/AccountsReceivable')) {
    SidebarComponent = <SideBarAR />;
  } else if (path.startsWith('/Finance/AssetManagement')) {
    SidebarComponent = <SideBarAM />;
  } else if (path.startsWith('/Finance/TaxManagement')) {
    SidebarComponent = <SideBarTM />;
  } else if (path.startsWith('/Finance/FinancialReporting')) {
    SidebarComponent = <SideBarFR />;
  } else {
    SidebarComponent = <SideBarFinance />;
  }

  return (
    <>
      <TopBarFinance />
      <NavBarFinance />
      <div className="d-flex" style={{ minHeight: '100vh' }}>
        {/* <SideBarHRM /> */}
        {SidebarComponent}



        <div className="flex-grow-1 p-4" style={{ backgroundColor: '#f0f0f0' }}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
