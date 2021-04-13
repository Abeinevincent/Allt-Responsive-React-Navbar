import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import { button } from '../Button';
import './Navbar.css';

export default class Navbar extends Component{
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render(){
        return(
            <nav className = 'NavbarItems'>
                <h1 className = 'navbar-logo'>React <i className = 'fab fa-react'></i></h1>
                <div className = 'menu-icon' onClick = {this.handleClick}>
                    <i className = {this.state.clicked ? 'fas fa-times' : 'fa fa-bars' }></i>
                </div>
                <ul className={ this.state.clicked ? 'nav-menu active' : 'nav-menu' }>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key = { index }>
                                <a href= {item.url} className = {item.cName}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                    
                </ul>
                <Button>SignUp</Button>
            </nav>
        );
    }
}