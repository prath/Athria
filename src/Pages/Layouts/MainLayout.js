import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
// Import Components
import Header from '../../Components/Header';
import Home from '../Home';
import Stuff from '../Stuff';

class MainLayout extends Component {
    render(){
        return(
            <Fragment>
                <Header />
                <div id="main-layout">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/stuff" component={Stuff} />
                    </Switch>
                </div>
            </Fragment>
        )
    }
}

export default MainLayout;