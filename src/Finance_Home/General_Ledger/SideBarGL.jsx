import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUsers, FaChartLine, FaUserGraduate, FaClipboardCheck, FaSignOutAlt, FaChartPie } from 'react-icons/fa';
import '../Sidebar.css';

function SideBarGL() {
  return (
    <div
      className=" text-white p-3"
      style={{ width: '250px', backgroundColor: '#142141' }}
    >
      <h5 className="mb-4">General Ledger</h5>
      <Nav className="flex-column">
        <Nav.Link as={NavLink} to="./ChartOfAccount" className="text-white sidebar-link">
          <FaUsers className="me-2" /> Chart of Accounts
        </Nav.Link>
        <Nav.Link as={NavLink} to="./JournalEntries" className="text-white sidebar-link">
          <FaChartLine className="me-2" /> Journal Entries
        </Nav.Link>
        <Nav.Link as={NavLink} to="./PostingPeriods" className="text-white sidebar-link">
          <FaUserGraduate className="me-2" /> Posting Periods
        </Nav.Link>
        <Nav.Link as={NavLink} to="./TrialBalance" className="text-white sidebar-link">
          <FaClipboardCheck className="me-2" /> Trial Balance
        </Nav.Link>
        <Nav.Link as={NavLink} to="./FinancialStatements" className="text-white sidebar-link">
          <FaSignOutAlt className="me-2" /> Financial Statements
        </Nav.Link>
        <Nav.Link as={NavLink} to="./AuditTrail" className="text-white sidebar-link">
          <FaChartPie className="me-2" /> Audit Trail / Logs
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default SideBarGL;
