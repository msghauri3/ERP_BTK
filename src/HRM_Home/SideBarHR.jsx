import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function SideBarFinance() {
  return (
    <div
      className="text-white p-3"
      style={{ width: '250px', backgroundColor: '#142141' , display:'flex',justifyContent:'center',alignItems:'center'}}
    >
      <h2 className="mb-4 text-center">HR Management</h2>
    </div>
  );
}

export default SideBarFinance;
