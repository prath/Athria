import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

// Import Components
import Header from '../../Components/Header';
import MemberNav from '../../Components/MemberNav';
/**
 * User Layout
 * @param {} param0 
 * 
 * The User layout and the route that will direct which component to load.
 * 
 */
const UserLayout = ({ component: Component, ...rest }) => {
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
    // console.log(children.props.match.params);
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