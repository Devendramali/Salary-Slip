import React from 'react'

import logo from "./../assets/logo.webp"

const Header = () => {
  return (
    <>
        <div className="header">
           <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="comapny">
                <h2>Enoylity <span>Studio</span> Pvt. Ltd</h2>
            </div>
        </div>
    </>
  )
}

export default Header