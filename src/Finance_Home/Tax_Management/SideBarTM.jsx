import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../Sidebar.css';

function SideBarTM() {
  return (
    <div
      className="sidebar text-white p-3"
      style={{ width: '250px',  backgroundColor: '#142141' }}
    >
      <h5 className="mb-4">Tax Management</h5>
      <Nav className="flex-column">
        <Nav.Link as={NavLink} to="./TaxCodes" className="text-white sidebar-link">Tax Codes</Nav.Link>
        <Nav.Link as={NavLink} to="./TaxCalculation" className="text-white sidebar-link">Tax Calculation</Nav.Link>
        <Nav.Link as={NavLink} to="./TaxFilingReturns" className="text-white sidebar-link">Tax Filing/Returns</Nav.Link>
        <Nav.Link as={NavLink} to="./WithholdingTax" className="text-white sidebar-link">Withholding Tax Management</Nav.Link>
        <Nav.Link as={NavLink} to="./TaxReports" className="text-white sidebar-link">Tax Reports</Nav.Link>
      </Nav>
    </div>


  );
}

export default SideBarTM;
