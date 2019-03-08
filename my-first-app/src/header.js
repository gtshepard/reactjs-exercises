import React from 'react'
import Logo from "./header/logo.js"
import Nav from "./header/navigation.js"

const Header = () => {
  return (
     <header id= "header">
      <div className="container" >
        <Logo title="My App"/>
        <Nav />
      </div>
     </header>
	);
}
export default Header;
