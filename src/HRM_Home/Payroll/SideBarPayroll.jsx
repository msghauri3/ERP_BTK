import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../Sidebar.css';

function SideBarPayroll() {
  return (
    <div
      className="sidebar text-white p-3"
      style={{ width: '250px', backgroundColor: '#142141' }}
    >
      <h5 className="mb-4">Payroll</h5>
      <Nav className="flex-column">
        <Nav.Link as={NavLink} to="./GeneratePayroll" end className="text-white sidebar-link">Generate Payroll</Nav.Link>
        <Nav.Link as={NavLink} to="./SalaryHistory" className="text-white sidebar-link">View Salary History</Nav.Link>
        <Nav.Link as={NavLink} to="./OvertimeDeductions" className="text-white sidebar-link">Overtime & Deductions</Nav.Link>
        <Nav.Link as={NavLink} to="./BonusesAllowances" className="text-white sidebar-link">Bonuses & Allowances</Nav.Link>
        <Nav.Link as={NavLink} to="./PayrollReports" className="text-white sidebar-link">Payroll Reports</Nav.Link>
        <Nav.Link as={NavLink} to="./PayrollSettings" className="text-white sidebar-link">Payroll Settings</Nav.Link>
      </Nav>

    </div>
  );
}

export default SideBarPayroll;
