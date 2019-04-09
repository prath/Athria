import React, { Component, Fragment } from 'react';
import ButtonPrimary from '../Components/Button/ButtonPrimary';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <p>Home content</p>
                <ButtonPrimary text="Another Button" name="another" type="button" />
            </Fragment>
        )
    }
}

export default Home;