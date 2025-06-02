import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../Sidebar.css';

function SideBarAR() {
  return (
    <div
      className="sidebar text-white p-3"
      style={{ width: '250px', minHeight: '100vh', backgroundColor: '#142141' }}
    >
      <h5 className="mb-4">Accounts Receivable</h5>
      <Nav className="flex-column">
        <Nav.Link as={NavLink} to="./CustomerManagement" className="text-white">Customer Management</Nav.Link>
        <Nav.Link as={NavLink} to="./SalesInvoices" className="text-white">Sales Invoices</Nav.Link>
        <Nav.Link as={NavLink} to="./ReceiptsPayments" className="text-white">Receipts/Payments</Nav.Link>
        <Nav.Link as={NavLink} to="./CustomerAgingReports" className="text-white">Customer Aging Reports</Nav.Link>
        <Nav.Link as={NavLink} to="./CreditDebitNotes" className="text-white">Credit/Debit Notes</Nav.Link>
      </Nav>
    </div>


  );
}

export default SideBarAR;
