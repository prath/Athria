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
import Posts from './Pages/Posts';
import Post from './Pages/Post';
import Member from './Pages/Member/Member';
import NotFound from './Pages/NotFound';
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
                    <DefaultLayout path="/posts" component={Posts} />
                    <DefaultLayout path="/post/:params" component={Post} />
                    {/* <DefaultLayout path="/Signin" component={SignIn} /> */}
                    {/* <DefaultLayout path="/signup" component={SignUp} /> */}

                    {/* User Layout Pages */}
                    <UserLayout exact path="/member" component={Member} />
                    <UserLayout path="/member/account" component={Account} />

                    {/* 404 */}
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

export default App;