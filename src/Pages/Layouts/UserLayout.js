import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

// Import Components
import Header from '../../Components/Header';
import MemberNav from '../../Components/MemberNav';
// import History from '../Member/History';
// import Account from '../Member/Account';
/**
 * User Layout
 * @param {} param0 
 * 
 * The User layout and the route that will direct which component to load.
 * 
 */
// TODO: add a nested route for sub-page in user/member page for instance.
// TODO: find out how to route member id or post id, or something similar to /member/212
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
    // console.log(children);
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