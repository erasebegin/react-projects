import React from 'react'
import NavButtons from './NavButtons'
import DatePicker from './DatePicker'
import Logo from './tharsus_logo.png'

const Nav = () => {
    return (
        <div>
            <img src={Logo} alt="Tharsus logo"></img> 
            <NavButtons />
            <DatePicker />
        </div>
    )
}

export default Nav