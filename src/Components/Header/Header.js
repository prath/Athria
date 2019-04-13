/**
 * HEADER COMPONENT
 * 
 * @author Pratama Hasriyan <pratama@hasriyan.com>
 */

import React, { Component } from 'react';

// Import Components
import MainNav from '../Nav/MainNav';
import Button from '../Button/Button';

// Asset Directory
const assetsDir = process.env.PUBLIC_URL;

/**
 * Default Class
 */
class Header extends Component {
    render(){
        return(
            <header>
                <img src={assetsDir + 'assets/images/icdonut.png'} alt="logo" />
                <MainNav />
                <Button size="tiny">Button</Button>
            </header>
        )
    }
}

export default Header;
