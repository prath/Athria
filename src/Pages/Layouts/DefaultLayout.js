import React from 'react';
import { Route } from 'react-router-dom';
// Import Components
import Header from '../../Components/Header';

const DefaultLayout = ({component: Component, ...rest}) => {
    return (
        <Header />
    )
}

export default DefaultLayout;
