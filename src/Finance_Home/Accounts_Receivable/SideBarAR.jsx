import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../Sidebar.css';

function SideBarAR() {
  return (
    <div
      className="sidebar text-white p-3"
      style={{ width: '250px',  backgroundColor: '#142141' }}
    >
      <h5 className="mb-4">Accounts Receivable</h5>
      <Nav className="flex-column">
        <Nav.Link as={NavLink} to="./CustomerManagement" className="text-white sidebar-link">Customer Management</Nav.Link>
        <Nav.Link as={NavLink} to="./SalesInvoices" className="text-white sidebar-link">Sales Invoices</Nav.Link>
        <Nav.Link as={NavLink} to="./ReceiptsPayments" className="text-white sidebar-link">Receipts/Payments</Nav.Link>
        <Nav.Link as={NavLink} to="./CustomerAgingReports" className="text-white sidebar-link">Customer Aging Reports</Nav.Link>
        <Nav.Link as={NavLink} to="./CreditDebitNotes" className="text-white sidebar-link">Credit/Debit Notes</Nav.Link>
      </Nav>
    </div>


  );
}

export default SideBarAR;
