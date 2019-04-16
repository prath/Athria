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
    constructor() {
        super();
        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Fragment>
                <h1>Posts</h1>
                <ul>
                    <li><Link to='post/single-poet'>Single Post Title</Link></li>
                </ul>
                <hr />
                <form onSubmit={this.handleSubmit}>
                    <label>Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="submit" />
                </form>
            </Fragment>
        )
    }
}

export default Posts;