import React, { Component } from 'react'
import './Navbar.css';

export class Navbar extends Component {
  render() {
    return (
      <div>
      <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-light custom-upper-navbar">
    <a className="navbar-brand" href="#">LOGO</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse">☰</button> 
    <div className="collapse navbar-collapse custom-below-navbar" id="navbar-collapse">
        <ul className="nav navbar-nav ml-auto">
            <li className="nav-item active"> <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item"> <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item"> <a className="nav-link" href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-item"> <a className="nav-link" href="#service">Services</a>
            </li>
            {/* <li className="nav-item"> <a className="nav-link" href="#price">Prices</a>
            </li> */}
            <li className="nav-item"> <a className="nav-link" href="#contact">Contact</a>
            </li>
            {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Separated link</a>
                </div>
            </li> */}
        </ul>
    </div>
</nav>
					{/* <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
          <div className="container-fluid">
            <div className="row">
              <div className="">
              <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <div className="">
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="nav navbar-nav mr-auto mt-2 mt-lg-0 pull-lg-right">
      <li className="nav-item active">
        <a className="nav-link smooth-scroll" href="#home">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link smooth-scroll" href="#about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link smooth-scroll" href="#portfolio">Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link smooth-scroll" href="#service">Service</a>
      </li>
      <li className="nav-item">
        <a className="nav-link smooth-scroll" href="#price">Price</a>
      </li>
      <li className="nav-item">
        <a className="nav-link smooth-scroll" href="#contact">Contact</a>
      </li>
    </ul>
  </div>
              </div>
            </div>
          </div>
</nav> */}
			
	
        
        
      </div>
    )
  }
}

export default Navbar
