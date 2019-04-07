import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Import Styles
import './App.scss';
// Import Components
import Home from './Pages/Home';
import Stuff from './Pages/Stuff';
import Contact from './Pages/Contact';

class App extends Component {
    render() {
        return (
            
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/stuff" component={Stuff}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
