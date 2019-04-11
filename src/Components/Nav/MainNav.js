/**
 * MAIN NAV COMPONENT
 * 
 * @author Pratama Hasriyan <pratama@hasriyan.com>
 */

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Load Dummy Data
import NavData from '../../_DummyData/Nav';

/**
 * Default Class
 */
class MainNav extends Component {
    render() {

        // Dummy Data Stored
        const links = NavData;
        
        // Iterate the data to form links
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