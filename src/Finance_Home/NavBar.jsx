import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';   // Import the stylesheet


function NavbarHome() {
  return (
    <Navbar className="custom-navbar" expand="lg" bg="light" variant="light">
      {/* Brand or ERP bold text */}
      <Navbar.Brand href="/Finance" className="ms-3 fw-bold">Finance</Navbar.Brand>

      {/* Nav links */}
      <Nav className="me-auto">
        <Nav.Link href="/Finance/GeneralLedger">General Ledger </Nav.Link>
        <Nav.Link href="/Finance/AccountsPayable">Accounts Payable</Nav.Link>
        <Nav.Link href="/Finance/AccountsReceivable">Accounts Receivable </Nav.Link>
        <Nav.Link href="/Finance/AssetManagement">Asset Management  </Nav.Link>
        <Nav.Link href="/Finance/TaxManagement">Tax Management </Nav.Link>
        <Nav.Link href="/Finance/FinancialReporting">Financial Reporting </Nav.Link>
        
      </Nav>

      {/* Right aligned Nav for Login and Settings */}
      <Nav className="ms-auto">
        <Nav.Link href="Login">Login</Nav.Link>
        <Nav.Link href="Settings">Settings</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavbarHome;
