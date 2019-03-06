import React from 'react'
import Logo from "./header/logo.js"
import Nav from "./header/navigation.js"

const Header = () => {
  return (
     <header id= "header">
      <div className="container" >
        <Logo />
        <Nav />
      </div>
     </header>
	);
}
export default Header;
