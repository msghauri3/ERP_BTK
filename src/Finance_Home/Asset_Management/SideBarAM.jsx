import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../Sidebar.css';

function SideBarAM() {
  return (
    <div
      className="sidebar text-white p-3"
      style={{ width: '250px', minHeight: '100vh', backgroundColor: '#142141' }}
    >
      <h5 className="mb-4">Asset Management</h5>
      <Nav className="flex-column">
        <Nav.Link as={NavLink} to="./AssetRegister" className="text-white">Asset Register</Nav.Link>
        <Nav.Link as={NavLink} to="./AssetAcquisition" className="text-white">Asset Acquisition</Nav.Link>
        <Nav.Link as={NavLink} to="./DepreciationCalculation" className="text-white">Depreciation Calculation</Nav.Link>
        <Nav.Link as={NavLink} to="./AssetDisposalSale" className="text-white">Asset Disposal/Sale</Nav.Link>
        <Nav.Link as={NavLink} to="./AssetReports" className="text-white">Asset Reports</Nav.Link>
      </Nav>
    </div>


  );
}

export default SideBarAM;
