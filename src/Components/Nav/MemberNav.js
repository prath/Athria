/**
 * MEMBER NAV COMPONENT
 * 
 * @author Pratama Hasriyan <pratama@hasriyan.com>
 */

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Load Dummy Data
import NavMemberData from '../../_DummyData/NavMember';

/**
 * Default Class
 */
class MemberNav extends Component {
    render() {

        // Dummy Data Stored
        const links = NavMemberData;
        
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

export default MemberNav