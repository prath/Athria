import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';// Import Components
import Header from '../../Components/Header';
import Contact from '../Contact';

class UserLayout extends Component {
    render() {
        return(
            <Fragment>
                <Header />
                <h1>Here is user layout</h1>
                <div id="user-layout">
                    <Switch>
                        <Route path="/contact" component={Contact} />
                    </Switch>
                </div>
            </Fragment>
        )
    }
}

export default UserLayout;