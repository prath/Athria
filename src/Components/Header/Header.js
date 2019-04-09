import React, { Component } from 'react';
// Import Components
import MainNav from '../Nav/MainNav';
import ButtonPrimary from '../Button/ButtonPrimary';
import ButtonSecondary from '../Button/ButtonSecondary';

class Header extends Component {
    render(){
        return(
            <header>
                <MainNav />
                <ButtonPrimary text="Submit" name="whatever" type="button" />
                <ButtonSecondary text="Submit" name="whatever" type="button" />
            </header>
        )
    }
}

export default Header;
