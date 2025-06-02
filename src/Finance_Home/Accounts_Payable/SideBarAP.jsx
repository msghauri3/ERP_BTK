import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../Sidebar.css';

function SideBarAP() {
  return (
    <div
      className="sidebar text-white p-3"
      style={{ width: '250px', minHeight: '100vh', backgroundColor: '#142141' }}
    >
      <h5 className="mb-4">Accounts Payable</h5>
      <Nav className="flex-column">
        <Nav.Link as={NavLink} to="./SupplierManagement" className="text-white">Supplier Management</Nav.Link>
        <Nav.Link as={NavLink} to="./PurchaseInvoices" className="text-white">Purchase Invoices</Nav.Link>
        <Nav.Link as={NavLink} to="./PaymentVouchers" className="text-white">Payment Vouchers</Nav.Link>
        <Nav.Link as={NavLink} to="./SupplierAgingReports" className="text-white">Supplier Aging Reports</Nav.Link>
        <Nav.Link as={NavLink} to="./DebitCreditNotes" className="text-white">Debit/Credit Notes</Nav.Link>
      </Nav>
    </div>
  );
}

export default SideBarAP;
