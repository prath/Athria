import React, { Component } from 'react';
// Import Components
import MainNav from '../Nav/MainNav';
import Button from '../Button/Button';

class Header extends Component {
    render(){
        return(
            <header>
                <MainNav />
                <Button>
                    Button
                </Button>
            </header>
        )
    }
}

export default Header;
