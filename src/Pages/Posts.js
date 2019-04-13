/**
 * POSTS VIEW
 * 
 * @author Pratama Hasriyan <pratama@hasriyan.com>
 */

import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

/**
 * Default Class
 */
class Posts extends Component {
    render() {
        return (
            <Fragment>
                <h1>Posts</h1>
                <ul>
                    <li><Link to='post/single-poet'>Single Post Title</Link></li>
                </ul>
            </Fragment>
        )
    }
}

export default Posts;