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
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <DefaultLayout exact path="/" component={Home} />
                    <DefaultLayout path="/stuff" component={Stuff} />
                    <UserLayout path="/contact" component={Contact} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

export default App;