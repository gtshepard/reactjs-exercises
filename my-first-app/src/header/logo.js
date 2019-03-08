import React from 'react'
import PropTypes from 'prop-types'
const Logo = (props) => {
  return ( 
    <div className="Logo">
      <a href ="#"> {props.title}</a>
    </div>
  )
}

Logo.propTypes  = {
  title: PropTypes.string,
}
export default Logo 


