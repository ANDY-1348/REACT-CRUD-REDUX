import React from 'react';
import logo from '../logo.svg';

const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <div className='container-fluid'>
        <div className='navbar-brand mr-3'>
          <img
            src={logo}
            alt=''
            width='30'
            height='24'
            className='d-inline-block align-text-top'
          />
          <span className='text-white '>Andy</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
