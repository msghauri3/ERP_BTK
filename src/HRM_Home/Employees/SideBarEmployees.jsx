import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUsers, FaChartLine, FaUserGraduate, FaClipboardCheck, FaSignOutAlt, FaChartPie } from 'react-icons/fa';
import '../Sidebar.css';

function SideBarEmployees() {
  return (
    <div
      className="sidebar text-white p-3"
      style={{ width: '250px', backgroundColor: '#142141' }}
    >
      <h5 className="mb-4">Employees</h5>
      <Nav className="flex-column">
        <Nav.Link as={NavLink} to="./AddEmployee" end className="text-white sidebar-link"> <FaUsers className="me-2" />Add Employee</Nav.Link>
        <Nav.Link as={NavLink} to="./UpdateEmployee" className="text-white sidebar-link"> <FaHome className="me-2" />Update Employee</Nav.Link>
        <Nav.Link as={NavLink} to="./DeleteEmployee" className="text-white sidebar-link"> <FaUsers className="me-2" />Delete Employee</Nav.Link>
        <Nav.Link as={NavLink} to="./EmployeeList" className="text-white sidebar-link"> <FaChartLine className="me-2" /> Employee List</Nav.Link>
        <Nav.Link as={NavLink} to="./EmployeeProfile" className="text-white sidebar-link">  <FaUserGraduate className="me-2" />Employee Profile</Nav.Link>
        <Nav.Link as={NavLink} to="./EmployeeDocuments" className="text-white sidebar-link"><FaSignOutAlt className="me-2" /> Employee Documents</Nav.Link>
        <Nav.Link as={NavLink} to="./DepartmentsDesignations" className="text-white sidebar-link"><FaSignOutAlt className="me-2" /> Depts & Designations</Nav.Link>
      </Nav>

    </div>
  );
}

export default SideBarEmployees;
