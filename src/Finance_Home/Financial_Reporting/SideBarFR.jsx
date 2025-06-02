import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../Sidebar.css';

function SideBarFR() {
  return (
    <div
      className="sidebar text-white p-3"
      style={{ width: '250px', minHeight: '100vh', backgroundColor: '#142141' }}
    >
      <h5 className="mb-4">Financial Reporting</h5>
      <Nav className="flex-column">
        <Nav.Link as={NavLink} to="./ProfitLossStatement" className="text-white">Profit & Loss Statement</Nav.Link>
        <Nav.Link as={NavLink} to="./BalanceSheet" className="text-white">Balance Sheet</Nav.Link>
        <Nav.Link as={NavLink} to="./CashFlowStatement" className="text-white">Cash Flow Statement</Nav.Link>
        <Nav.Link as={NavLink} to="./BudgetActualReports" className="text-white">Budget vs Actual Reports</Nav.Link>
        <Nav.Link as={NavLink} to="./FinancialRatio" className="text-white">Financial Ratio Analysis</Nav.Link>
      </Nav>

    </div>


  );
}

export default SideBarFR;
