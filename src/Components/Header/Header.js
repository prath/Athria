/**
 * HEADER COMPONENT
 * 
 * @author Pratama Hasriyan <pratama@hasriyan.com>
 */

import React, { Component } from 'react';

// Import Components
import MainNav from '../Nav/MainNav';
import Button from '../Button/Button';

/**
 * Default Class
 */
class Header extends Component {
    render(){
        return(
            <header>
                <MainNav />
                <Button size="tiny">Button</Button>
            </header>
        )
    }
}

export default Header;
