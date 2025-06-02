import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function SideBarFinance() {
  return (
    <div
      className="sidebar1 text-white p-3"
      style={{ width: '250px', minHeight: '100vh', backgroundColor: '#142141' }}
    >
      <h2 className="mb-4 text-center">Finance & Accounting</h2>
    </div>
  );
}

export default SideBarFinance;
