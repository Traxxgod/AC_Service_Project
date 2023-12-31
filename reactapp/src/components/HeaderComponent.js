import React from 'react'
import '../css/topheader.css';

import { Link } from 'react-router-dom';
const HeaderComponent = () => {
  return (
    <div className='row top_header' style={{display:'flex'}}>
      <header>
        <nav className='navbar navbar-expand-md'>
            <div style={{textAlign : 'center', height : '6px', width : '519%'}}>
            <h1> AC REPAIR PORTAL</h1>
            </div>

            <ul className="navbar-nav mrl-auto">

            <div className='col-1 col-md-2 col-xl-1 col-lg-1'>
        <div className="container-Project-item" >
        <Link className="menu-item" to={`/AboutUs`}>
        <buton type="button" className="btn btn-primary">About Us</buton>
      </Link> 
      <Link className="menu-item" to="/AboutUs#contact"> 
        <button  type="button" className="btn btn-primary">Contact Us</button>
           </Link>
        </div>
      </div>
      <div className='col-1 col-md-1 col-xl-1 col-lg-1'>
        <div className="container-Project-item" >
       
        </div>
      </div>
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default HeaderComponent