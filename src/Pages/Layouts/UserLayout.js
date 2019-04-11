/**
 * MEMBER VIEW LAYOUT
 * 
 * @author Pratama Hasriyan <pratama@hasriyan.com>
 */

import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

// Import Components
import Header from '../../Components/Header/Header';
import MemberNav from '../../Components/Nav/MemberNav';

/**
 * User Layout
 * @param {component, props}, 
 * 
 * The User layout and the route that will direct which component to load.
 * 
 */
const UserLayout = ({ component: Component, ...rest }) => {
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
            <MemberNav />
            <section>
                <h1>{children.type.name}</h1>
                {children}
            </section>
        </Fragment>
    )
}

export default UserLayout;