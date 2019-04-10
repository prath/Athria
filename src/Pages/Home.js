import React, { Component, Fragment } from 'react';
import Button, { ButtonVariant, ButtonSize, ButtonType } from '../Components/Button/Button';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <p>Home content</p>
                <Button
                    variant={ButtonVariant.SECONDARY}
                    size={ButtonSize.BIG}
                    type={ButtonType.BUTTON}
                    // disabled
                    classname="clear"
                    onClick= {() => {return true;}}
                >
                Button Two
                </Button>
            </Fragment>
        )
    }
}

export default Home;