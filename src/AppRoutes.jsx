import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts
import ERPLayout from './ERP_Home/Layout';
import HRMLayout from './HRM_Home/Layout';
import RNDLayout from './HRM_Home/Layout';
import FinanceLayout from './Finance_Home/Layout'
import CRMLayout from './CRM_Home/Layout'

import InventoryLayout from './Inventory_Home/Layout'
import SupplyChainLayout from './SupplyChain_Home/Layout'
import ProcurmentLayout from './Procurment_Home/Layout'



// Pages

import HomeERP from './ERP_Home/Home';
<<<<<<< HEAD
import HomeHRM from './HRM_Home/Home';
import DashboardHRM from './HRM_Home/DashboardHRM';
import EmployeesDetail from './HRM_Home/EmployeesDetail'
import Payroll from './HRM_Home/Payroll';
import Leaves from './HRM_Home/Leaves'
import TaxSetup from './HRM_Home/TaxSetup'
import Reports from './HRM_Home/Reports'
import ChartOfAccount from './Finance_Home/ChartOfAccount'
=======
>>>>>>> 528860ebfc5396dadf6b106bcf92cac43bb8a7e3




// HR Module
import HRHome from './HRM_Home/HRHome';
// Employees
import Employees from './HRM_Home/Employees/Employees';
import AddEmployee from './HRM_Home/Employees/AddEmployee';
import DeleteEmployee from './HRM_Home/Employees/DeleteEmployee';
import DepartmentsDesignations from './HRM_Home/Employees/DepartmentsDesignations';
import EmployeeDocuments from './HRM_Home/Employees/EmployeeDocuments';
import EmployeeList from './HRM_Home/Employees/EmployeeList';
import EmployeeProfile from './HRM_Home/Employees/EmployeeProfile';
import UpdateEmployee from './HRM_Home/Employees/UpdateEmployee';
// Payroll
import Payroll from './HRM_Home/Payroll/Payroll';
import BonusesAllowances from './HRM_Home/Payroll/BonusesAllowances';
import GeneratePayroll from './HRM_Home/Payroll/GeneratePayroll';
import OvertimeDeductions from './HRM_Home/Payroll/OvertimeDeductions';
import PayrollReports from './HRM_Home/Payroll/PayrollReports';
import PayrollSettings from './HRM_Home/Payroll/PayrollSettings';
import SalaryHistory from './HRM_Home/Payroll/SalaryHistory';
// Leaves
import Leaves from './HRM_Home/Leaves/Leaves';
import ApplyLeave from './HRM_Home/Leaves/ApplyLeave';
import ApproveRejectLeave from './HRM_Home/Leaves/ApproveRejectLeave';
import LeaveHistory from './HRM_Home/Leaves/LeaveHistory';
import LeaveReports from './HRM_Home/Leaves/LeaveReports';
import LeaveTypes from './HRM_Home/Leaves/LeaveTypes';




// Finance Module
import FinanceHome from './Finance_Home/FinanceHome';
// General Ledeger
import GeneralLedger from './Finance_Home/General_Ledger/GeneralLedger';
import ChartOfAccount from './Finance_Home/General_Ledger/ChartOfAccount'
import AuditTrail from './Finance_Home/General_Ledger/AuditTrail';
import FinancialStatements from './Finance_Home/General_Ledger/FinancialStatements';
import TrialBalance from './Finance_Home/General_Ledger/TrialBalance';
import PostingPeriods from './Finance_Home/General_Ledger/PostingPeriods';
import JournalEntries from './Finance_Home/General_Ledger/JournalEntries';
// Accounts Payable
import AccountsPayable from './Finance_Home/Accounts_Payable/AccountsPayable';
import DebitCreditNotes from './Finance_Home/Accounts_Payable/DebitCreditNotes';
import PaymentVouchers from './Finance_Home/Accounts_Payable/PaymentVouchers';
import PurchaseInvoices from './Finance_Home/Accounts_Payable/PurchaseInvoices';
import SupplierManagement from './Finance_Home/Accounts_Payable/SupplierManagement';
import SupplierAgingReports from './Finance_Home/Accounts_Payable/SupplierAgingReports';
// Accounts Receivable
import AccountsReceivable from './Finance_Home/Accounts_Receivable/AccountsReceivable';
import CreditDebitNotes from './Finance_Home/Accounts_Receivable/CreditDebitNotes';
import CustomerAgingReports from './Finance_Home/Accounts_Receivable/CustomerAgingReports';
import CustomerManagement from './Finance_Home/Accounts_Receivable/CustomerManagement';
import ReceiptsPayments from './Finance_Home/Accounts_Receivable/ReceiptsPayments';
import SalesInvoices from './Finance_Home/Accounts_Receivable/SalesInvoices';
// Asset Management
import AssetManagement from './Finance_Home/Asset_Management/AssetManagement';
import AssetAcquisition from './Finance_Home/Asset_Management/AssetAcquisition';
import AssetDisposalSale from './Finance_Home/Asset_Management/AssetDisposalSale';
import AssetRegister from './Finance_Home/Asset_Management/AssetRegister';
import AssetReports from './Finance_Home/Asset_Management/AssetReports';
import DepreciationCalculation from './Finance_Home/Asset_Management/DepreciationCalculation';
// Tax Management
import TaxManagement from './Finance_Home/Tax_Management/TaxManagement';
import TaxCalculation from './Finance_Home/Tax_Management/TaxCalculation';
import TaxCodes from './Finance_Home/Tax_Management/TaxCodes';
import TaxFilingReturns from './Finance_Home/Tax_Management/TaxFilingReturns';
import TaxReports from './Finance_Home/Tax_Management/TaxReports';
import WithholdingTax from './Finance_Home/Tax_Management/WithholdingTax';
// Finantial Reporting
import FinancialReporting from './Finance_Home/Financial_Reporting/FinancialReporting';
import BalanceSheet from './Finance_Home/Financial_Reporting/BalanceSheet';
import BudgetActualReports from './Finance_Home/Financial_Reporting/BudgetActualReports';
import CashFlowStatement from './Finance_Home/Financial_Reporting/CashFlowStatement';
import FinancialRatio from './Finance_Home/Financial_Reporting/FinancialRatio';
import ProfitLossStatement from './Finance_Home/Financial_Reporting/ProfitLossStatement';

import Axios1 from './RND/Axios1'


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ERPLayout />}>
       
      </Route>




      {/* HR Module */}
      <Route path="/HRM" element={<HRMLayout />}>
<<<<<<< HEAD
        <Route index element={<HomeHRM />} />
        <Route path="DashboardHRM" element={<DashboardHRM />} />
        <Route path="EmployeesDetail" element={<EmployeesDetail />} />        
        <Route path="GeneratePayroll" element={<Payroll />} />
        <Route path="Leaves" element={<Leaves />} />
        <Route path="TaxSetup" element={<TaxSetup />} />
        <Route path="Leaves" element={<Leaves />} />
        <Route path="Payroll" element={<Payroll />} />
        <Route path="Reports" element={<Reports />} />
=======
        <Route index element={<HRHome />} />
      </Route>
      {/* Employees */}
      <Route path="/HRM/Employees" element={<HRMLayout />}>
        <Route index element={<Employees />} />
        <Route path="AddEmployee" element={<AddEmployee />} />
        <Route path="DepartmentsDesignations" element={<DepartmentsDesignations />} />
        <Route path="DeleteEmployee" element={<DeleteEmployee />} />
        <Route path="EmployeeDocuments" element={<EmployeeDocuments />} />
        <Route path="EmployeeList" element={<EmployeeList />} />
        <Route path="EmployeeProfile" element={<EmployeeProfile />} />
        <Route path="UpdateEmployee" element={<UpdateEmployee />} />
      </Route>
      {/* Payroll */}
      <Route path="/HRM/Payroll" element={<HRMLayout />}>
        <Route index element={<Payroll />} />
        <Route path="BonusesAllowances" element={<BonusesAllowances />} />
        <Route path="GeneratePayroll" element={<GeneratePayroll />} />
        <Route path="OvertimeDeductions" element={<OvertimeDeductions />} />
        <Route path="PayrollReports" element={<PayrollReports />} />
        <Route path="PayrollSettings" element={<PayrollSettings />} />
        <Route path="SalaryHistory" element={<SalaryHistory />} />
      </Route>
      {/* Leaves */}
      <Route path="/HRM/Leaves" element={<HRMLayout />}>
        <Route index element={<Leaves />} />
        <Route path="ApplyLeave" element={<ApplyLeave />} />
        <Route path="ApproveRejectLeave" element={<ApproveRejectLeave />} />
        <Route path="LeaveHistory" element={<LeaveHistory />} />
        <Route path="LeaveReports" element={<LeaveReports />} />
        <Route path="LeaveTypes" element={<LeaveTypes />} />
>>>>>>> 528860ebfc5396dadf6b106bcf92cac43bb8a7e3
      </Route>








      {/* Finance Module */}
      <Route path="/Finance" element={<FinanceLayout />}>
        <Route index element={<FinanceHome />} />
      </Route>
      {/* General Ledger */}
      <Route path="/Finance/GeneralLedger" element={<FinanceLayout />}>
        <Route index element={<GeneralLedger />} />
        <Route path="ChartOfAccount" element={<ChartOfAccount />} />
        <Route path="AuditTrail" element={<AuditTrail />} />
        <Route path="FinancialStatements" element={<FinancialStatements />} />
        <Route path="TrialBalance" element={<TrialBalance />} />
        <Route path="PostingPeriods" element={<PostingPeriods />} />
        <Route path="JournalEntries" element={<JournalEntries />} />
      </Route>

      {/* Accounts Payable */}
      <Route path="/Finance/AccountsPayable" element={<FinanceLayout />}>
        <Route index element={<AccountsPayable />} />
        <Route path="DebitCreditNotes" element={<DebitCreditNotes />} />
        <Route path="PaymentVouchers" element={<PaymentVouchers />} />
        <Route path="PurchaseInvoices" element={<PurchaseInvoices />} />
        <Route path="SupplierManagement" element={<SupplierManagement />} />
        <Route path="SupplierAgingReports" element={<SupplierAgingReports />} />
      </Route>
      {/* Accounts Receivable */}
      <Route path="/Finance/AccountsReceivable" element={<FinanceLayout />}>
        <Route index element={<AccountsReceivable />} />
        <Route path="CreditDebitNotes" element={<CreditDebitNotes />} />
        <Route path="CustomerAgingReports" element={<CustomerAgingReports />} />
        <Route path="CustomerManagement" element={<CustomerManagement />} />
        <Route path="ReceiptsPayments" element={<ReceiptsPayments />} />
        <Route path="SalesInvoices" element={<SalesInvoices />} />
      </Route>
      {/* Asset Management */}
      <Route path="/Finance/AssetManagement" element={<FinanceLayout />}>
        <Route index element={<AssetManagement />} />
        <Route path="AssetAcquisition" element={<AssetAcquisition />} />
        <Route path="AssetDisposalSale" element={<AssetDisposalSale />} />
        <Route path="AssetRegister" element={<AssetRegister />} />
        <Route path="AssetReports" element={<AssetReports />} />
        <Route path="DepreciationCalculation" element={<DepreciationCalculation />} />
      </Route>
      {/* Tax Management */}
      <Route path="/Finance/TaxManagement" element={<FinanceLayout />}>
        <Route index element={<TaxManagement />} />
        <Route path="TaxCalculation" element={<TaxCalculation />} />
        <Route path="TaxCodes" element={<TaxCodes />} />
        <Route path="TaxFilingReturns" element={<TaxFilingReturns />} />
        <Route path="TaxReports" element={<TaxReports />} />
        <Route path="WithholdingTax" element={<WithholdingTax />} />
      </Route>

      {/* Financial Reporting */}
      <Route path="/Finance/FinancialReporting" element={<FinanceLayout />}>
        <Route index element={<FinancialReporting />} />
        <Route path="BalanceSheet" element={<BalanceSheet />} />
        <Route path="BudgetActualReports" element={<BudgetActualReports />} />
        <Route path="CashFlowStatement" element={<CashFlowStatement />} />
        <Route path="FinancialRatio" element={<FinancialRatio />} />
        <Route path="ProfitLossStatement" element={<ProfitLossStatement />} />
      </Route>


      {/* <Route path="/CRM" element={<CRMLayout />}>
        <Route index element={<HomeHRM />} />
        <Route path="DashboardHRM" element={<DashboardHRM />} />
        <Route path="Payroll" element={<Payroll />} />
        <Route path="Leaves" element={<Leaves />} />
      </Route> */}



      {/* <Route path="/Inventory" element={<InventoryLayout />}>
        <Route index element={<HomeHRM />} />
        <Route path="DashboardHRM" element={<DashboardHRM />} />
        <Route path="Payroll" element={<Payroll />} />
        <Route path="Leaves" element={<Leaves />} />
      </Route> */}


      {/* <Route path="/SupplyChain" element={<SupplyChainLayout />}>
        <Route index element={<HomeHRM />} />
        <Route path="DashboardHRM" element={<DashboardHRM />} />
        <Route path="Payroll" element={<Payroll />} />
        <Route path="Leaves" element={<Leaves />} />
      </Route> */}


      {/* <Route path="/Procurement" element={<ProcurmentLayout />}>
        <Route index element={<HomeHRM />} />
        <Route path="DashboardHRM" element={<DashboardHRM />} />
        <Route path="Payroll" element={<Payroll />} />
        <Route path="Leaves" element={<Leaves />} />
      </Route> */}



      <Route path="/RND" element={<RNDLayout />}>
        <Route index element={<Axios1 />} />
        <Route path="Axios1" element={<Axios1 />} />
      </Route>

    </Routes>
  );
}

export default AppRoutes;
