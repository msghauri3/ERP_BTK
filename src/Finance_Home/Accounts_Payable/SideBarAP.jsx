import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../Sidebar.css';

function SideBarAP() {
  return (
    <div
      className=" text-white p-3"
      style={{ width: '250px',  backgroundColor: '#142141' }}
    >
      <h5 className="mb-4">Accounts Payable</h5>
      <Nav className="flex-column">
        <Nav.Link as={NavLink} to="./SupplierManagement" className="text-white sidebar-link">Supplier Management</Nav.Link>
        <Nav.Link as={NavLink} to="./PurchaseInvoices" className="text-white sidebar-link">Purchase Invoices</Nav.Link>
        <Nav.Link as={NavLink} to="./PaymentVouchers" className="text-white sidebar-link">Payment Vouchers</Nav.Link>
        <Nav.Link as={NavLink} to="./SupplierAgingReports" className="text-white sidebar-link">Supplier Aging Reports</Nav.Link>
        <Nav.Link as={NavLink} to="./DebitCreditNotes" className="text-white sidebar-link">Debit/Credit Notes</Nav.Link>
      </Nav>
    </div>
  );
}

export default SideBarAP;
