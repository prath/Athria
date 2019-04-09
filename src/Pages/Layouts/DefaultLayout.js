import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

// Import Components
import Header from '../../Components/Header/Header';

/**
 * Default Layout
 * @param {component, props} param0 
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
 * @param {children} param0 
 * 
 * Here will be rendered the content of each page that uses Default Layout
 */
export const Content = ({ children }) => {
    return (
        <Fragment>
            <section>
                <h1>{children.type.name}</h1>
                {children}
            </section>
        </Fragment>
    )
}

export default DefaultLayout;
