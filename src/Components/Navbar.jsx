import React from 'react';
import ReactDOM from 'react-dom';
import image9 from "../Images/brand1.png";


function Navbar(props) {
  return <div className = "navContainer">
            <nav className = "navbar">
              <div className = "navitem navBrand csNav" >
                <img src = {image9}></img>
              </div>
              <div className = "navContent" >
                <ul className = "navitem csNav">
                  <li> Home </li>
                  <li> Featured </li>
                  <li> About </li>
                  <li> Contact </li>
                </ul>
              </div>
              <div className = "navitem navLogin csNav" >
                <h5><i className="fa-solid fa-bag-shopping"></i></h5>
              </div>
              <div className = "mobnavContent" >
                <button type="button" name="button"><i className="fa-solid fa-grip-lines"></i></button>
              </div>
            </nav>
            <ul className = "mobnavitem csNav">
              <li> Home </li>
              <li> Featured </li>
              <li> About </li>
              <li> Contact </li>
              <h5><i className="fa-solid fa-bag-shopping"></i></h5>
            </ul>
        </div>
}

export default Navbar;
