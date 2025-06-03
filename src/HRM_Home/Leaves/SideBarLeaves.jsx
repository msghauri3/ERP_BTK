import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../Sidebar.css';

function SideBarLeaves() {
  return (
    <div
      className="sidebar text-white p-3"
      style={{ width: '250px', backgroundColor: '#142141' }}
    >
      <h5 className="mb-4">Leaves</h5>
      <Nav className="flex-column">
        <Nav.Link as={NavLink} to="./ApplyLeave" end className="text-white sidebar-link">Apply Leave</Nav.Link>
        <Nav.Link as={NavLink} to="./ApproveRejectLeave" className="text-white sidebar-link">Approve/Reject Leave</Nav.Link>
        <Nav.Link as={NavLink} to="./LeaveHistory" className="text-white sidebar-link">Leave Balance/History</Nav.Link>
        <Nav.Link as={NavLink} to="./LeaveTypes" className="text-white sidebar-link">Leave Types</Nav.Link>
        <Nav.Link as={NavLink} to="./LeaveReports" className="text-white sidebar-link">Leave Reports</Nav.Link>
      </Nav>


    </div>
  );
}

export default SideBarLeaves;
