import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// Load Dummy Data
import NavData from '../../_DummyData/Nav';

class MainNav extends Component {
    render() {

        // Dummy Data Stored
        const links = NavData;
        
        const navList = links.map((val, key) => {
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