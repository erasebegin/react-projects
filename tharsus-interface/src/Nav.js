import React from 'react'
import NavButtons from './NavButtons'
import DatePicker from './DatePicker'
import Logo from './tharsus_logo.png'
import './Nav.css'

const Nav = () => {
    return (
        <div className="nav-container">
            <img src={Logo} alt="Tharsus logo"></img> 
            <NavButtons />
            <DatePicker />
        </div>
    )
}

export default Nav