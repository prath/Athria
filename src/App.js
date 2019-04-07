import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
// Import Styles
import './App.scss';
// Load Dummy Data
import NavData from './_DummyData/Nav';
// Import Components
import MainNav from './Components/MainNav';
import Home from './Pages/Home';
import Stuff from './Pages/Stuff';
import Contact from './Pages/Contact';

class App extends Component {
    render() {

        // Dummy Data Stored
        const links = NavData;

        return (
            /**
             * HashRouter needs to enclose the main container in which the navigation and content area will be loaded
             */
            <HashRouter>
                <header>
                    <MainNav theLinks={links} />
                </header>
                {/* This is the content area, the content will be loaded here */}
                <main id="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/stuff" component={Stuff}/>
                    <Route path="/contact" component={Contact}/>
                </main>
            </HashRouter>
        );
    }
}

export default App;
