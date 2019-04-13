/**
 * DEFAULT LAYOUT VIEW
 * 
 * @author Pratama Hasriyan <pratama@hasriyan.com>
 */

import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

// Import Components
import Header from '../../Components/Header/Header';

/**
 * Default Layout
 * @param {component, props} 
 * 
 * The default layout and the route that will direct which component to load.
 */
const DefaultLayout = ({ component: Component, ...rest }) => {
    return (
        <Fragment>
            <Header />
            <Route {...rest} render={ match => (
                <Content>
                    <Component {...match} />
                </Content>
            )} />
        </Fragment>
    )
}

/**
 * Content Component
 * @param {children} 
 * 
 * Here will be rendered the content of each page that uses Default Layout
 */
export const Content = ({ children }) => {
    return (
        <Fragment>
            <section>
                {children}
            </section>
        </Fragment>
    )
}

export default DefaultLayout;
