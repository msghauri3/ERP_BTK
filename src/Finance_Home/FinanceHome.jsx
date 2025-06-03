import React from 'react';
import financeImage from './Finance.jpg'; // yahan image ka path sahi rakhna!

function FinanceHome() {
  return (
    <div className='photo'>
      <img src={financeImage} alt="Finance" />
    </div>
  );
}

export default FinanceHome;
