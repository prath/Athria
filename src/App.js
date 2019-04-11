/**
 * MAIN APP LOADS AND ROUTES
 * 
 * @author Pratama Hasriyan <pratama@hasriyan.com>
 */

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import Styles
import './App.scss';

// Import Layouts
import DefaultLayout from './Pages/Layouts/DefaultLayout';
import UserLayout from './Pages/Layouts/UserLayout';

// Import Pages
import Home from './Pages/Home';
import Stuff from './Pages/Stuff';
import Member from './Pages/Member/Member';
import NotFound from './Pages/NotFound';
import History from './Pages/Member/History';
import Account from './Pages/Member/Account';

/**
 * Default Class
 */
class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    {/* Default Layout Pages */}
                    <DefaultLayout exact path="/" component={Home} />
                    <DefaultLayout path="/stuff" component={Stuff} />

                    {/* User Layout Pages */}
                    <UserLayout exact path="/member" component={Member} />
                    <UserLayout path="/member/history" component={History} />
                    <UserLayout path="/member/account" component={Account} />
                    <UserLayout path="/member/:params" component={Account} />

                    {/* 404 */}
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

export default App;