import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Import Styles
import './App.scss';
// Import Components
import MainLayout from './Pages/Layouts/MainLayout';
import UserLayout from './Pages/Layouts/UserLayout';
import NotFound from './Pages/NotFound';

const layout = {
    '/': MainLayout,
    '/stuff': MainLayout,
    '/contact': UserLayout
}

class App extends Component {
    render() {
        return (
            <Router>
                <Route path="*" render={layoutPicker} />
            </Router>
        );
    }
}

const layoutPicker = (props) => {
    let Layout = layout[props.location.pathname];
    return Layout ? < Layout / > : < NotFound / > ;
}

export default App;