import React from 'react';

const Nav = () => {


  let isLoggedIn = true

  if (isLoggedIn) {
    return (
        <div className="nav">
          <nav>
            <ul>
              <li><a href="">Home </a> </li>
              <li><a href="">About Us </a> </li>
              <li><a href="">Contact us </a> </li> 
              <li><a href="">Services </a> </li>
            </ul>
          </nav>
        </div> 
    )
     
  } else {
    return (
        <div className="nav">
          <nav>
            <ul>
              <li><a href="">Sign Up </a> </li>
              <li><a href="">Login </a> </li>
            </ul>
          </nav>
        </div> 
    )
  }
}


export default Nav
