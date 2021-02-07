import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import './Header.css';


const Header = () => (
   <header className="header">
       <div className="app-bar">
           <div className="nav-container">
            <Link className="logo-title-container" to="/">
                <img width='50px' height='30px' src="https://seeklogo.com/images/B/Brasil-logo-00798AB0F3-seeklogo.com.png" alt="logo-brasil" className='logo-brasil' />
                &nbsp;&nbsp;
                <h1>PALMEIRAS</h1>
            </Link>
            <Button/>
           </div>
       </div>
   </header>
);

export default Header;
