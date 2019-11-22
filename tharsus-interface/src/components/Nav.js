import React from 'react'
import NavButtons from './NavButtons'
import DatePicker from './DatePicker'
import Logo from '../tharsus_logo.png'
import '../styles/Nav.css'

class Nav extends React.Component {
    constructor() {
        super()
        this.state = {navState:''}
        this.setNavState = this.setNavState.bind(this)
    }
    setNavState(navState){
        this.setState(navState)
        console.log("success!"+navState)
    }

    render() {
        return (
            <div className="nav-container">
                <img src={Logo} alt="Tharsus logo"></img> 
                <NavButtons getState={this.setNavState}/>
                <DatePicker />
            </div>
        )
    }
    
}

export default Nav