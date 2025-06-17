import React from 'react';
import HRimage from './HR.jpg'; // yahan image ka path sahi rakhna!
import './Sidebar.css';

function FinanceHome() {
  return (
    <div className='photo'>
      <img src={HRimage} alt="Finance" />
    </div>
  );
}

export default FinanceHome;
