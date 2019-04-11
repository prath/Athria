/**
 * HOME VIEW
 * 
 * @author Pratama Hasriyan <pratama@hasriyan.com>
 */

import React, { Component, Fragment } from 'react';

// Import Components
import Button from '../Components/Button/Button';

/**
 * Default Class
 */
class Home extends Component {
    render() {
        return (
            <Fragment>
                <p>Home content</p>
                <Button 
                    variant="warning" 
                    size="large" 
                    classname="clear">
                    Button Two
                </Button>
            </Fragment>
        )
    }
}

export default Home;