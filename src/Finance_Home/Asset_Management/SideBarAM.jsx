import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../Sidebar.css';

function SideBarAM() {
  return (
    <div
      className="sidebar text-white p-3"
      style={{ width: '250px',backgroundColor: '#142141' }}
    >
      <h5 className="mb-4">Asset Management</h5>
      <Nav className="flex-column">
        <Nav.Link as={NavLink} to="./AssetRegister" className="text-white sidebar-link">Asset Register</Nav.Link>
        <Nav.Link as={NavLink} to="./AssetAcquisition" className="text-white sidebar-link">Asset Acquisition</Nav.Link>
        <Nav.Link as={NavLink} to="./DepreciationCalculation" className="text-white sidebar-link">Depreciation Calculation</Nav.Link>
        <Nav.Link as={NavLink} to="./AssetDisposalSale" className="text-white sidebar-link">Asset Disposal/Sale</Nav.Link>
        <Nav.Link as={NavLink} to="./AssetReports" className="text-white sidebar-link">Asset Reports</Nav.Link>
      </Nav>
    </div>


  );
}

export default SideBarAM;
