import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Import Styles
import './App.scss';
// Import Components
import MainLayout from './Pages/Layouts/MainLayout';
import UserLayout from './Pages/Layouts/UserLayout';
import NotFound from './Pages/NotFound';

const layoutAssingment = {
    '/': MainLayout,
    '/stuff': MainLayout,
    '/contact': UserLayout
}

class App extends Component {
    render() {
        return (
            <Router>

                <Route path="*" render={layoutPicker} />

                {/* TODO: need more info about layouting, find out about Master layout and router */}
                {/*
                <MainLayout>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/stuff" component={Stuff}/>
                    </Switch>
                </MainLayout> 
                */}
            </Router>
        );
    }
}

const layoutPicker = (props) => {
    let Layout = layoutAssingment[props.location.pathname];
    return Layout ? < Layout / > : <NotFound />;
}

export default App;