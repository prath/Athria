import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

// Import Components
import Header from '../../Components/Header';

/**
 * Default Layout
 * @param {} param0 
 * 
 * The default layout and the route that will direct which component to load.
 */
const DefaultLayout = ({ component: Component, ...rest }) => {
    return (
        <Fragment>
            <Header />
            <Route {...rest} render={ matchProps => (
                <Content>
                    <Component {...matchProps} />
                </Content>
            )} />
        </Fragment>
    )
}

/**
 * Content Component
 * @param {} param0 
 * 
 * Here will be rendered the content of each page that uses Default Layout
 */
export const Content = ({ children }) => {
    return (
        <Fragment>
            {children}
        </Fragment>
    )
}

export default DefaultLayout;