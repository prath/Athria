import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// Load Dummy Data
import NavMemberData from '../../_DummyData/NavMember';

class MemberNav extends Component {
    render() {

        // Dummy Data Stored
        const links = NavMemberData;
        
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