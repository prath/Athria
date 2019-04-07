import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MainNav extends Component {
    render() {

        const navList = this.props.theLinks.map((val, key) => {
            return (
                <li key={key}><NavLink to={val.link}>{val.label}</NavLink></li>
            )
        })

        return(
            <nav>
                <ul>
                    {navList}
                </ul>
            </nav>
        )
    }
}

export default MainNav