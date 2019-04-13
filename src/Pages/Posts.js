/**
 * POSTS VIEW
 * 
 * @author Pratama Hasriyan <pratama@hasriyan.com>
 */

import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

// Load Dummy Data
import PostData from '../_DummyData/Post';

/**
 * Default Class
 */
class Posts extends Component {
    constructor () {
        super();
        this.state = {
            posts : PostData
        }
    }
    render() {
        
        const posts = this.state.posts.map( (value, key) => {
            return (
                <li key={key}><Link to={`post/${value.slug}`}>{value.title}</Link></li>
            )
        })
        
        return (
            <Fragment>
                <h1>Posts</h1>
                <ul>
                    {posts}
                </ul>
            </Fragment>
        )
    }
}

export default Posts;