import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../Sidebar.css';

function SideBarFR() {
  return (
    <div
      className="sidebar text-white p-3"
      style={{ width: '250px',  backgroundColor: '#142141' }}
    >
      <h5 className="mb-4">Financial Reporting</h5>
      <Nav className="flex-column">
        <Nav.Link as={NavLink} to="./ProfitLossStatement" className="text-white sidebar-link">Profit & Loss Statement</Nav.Link>
        <Nav.Link as={NavLink} to="./BalanceSheet" className="text-white sidebar-link">Balance Sheet</Nav.Link>
        <Nav.Link as={NavLink} to="./CashFlowStatement" className="text-white sidebar-link">Cash Flow Statement</Nav.Link>
        <Nav.Link as={NavLink} to="./BudgetActualReports" className="text-white sidebar-link">Budget vs Actual Reports</Nav.Link>
        <Nav.Link as={NavLink} to="./FinancialRatio" className="text-white sidebar-link">Financial Ratio Analysis</Nav.Link>
      </Nav>

    </div>


  );
}

export default SideBarFR;
