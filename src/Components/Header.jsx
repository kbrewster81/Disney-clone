import React, { useState } from "react";
import logo from "./../assets/Images/logo.png";


function Header() {
    return (
        <div>
            <img src={logo} className='w-[80px] object-cover' />
        </div>
    )
}

export default Header;
