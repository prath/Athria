/**
 * POST VIEW
 * 
 * @author Pratama Hasriyan <pratama@hasriyan.com>
 */

import React, { Component, Fragment } from 'react';
import Button from '../Components/Button/Button';

/**
 * Default Class
 */
class Post extends Component {
    constructor() {
        super();
        this.state = {
            post: [],
            isLoading: true
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 2000);
        console.log("mounted");
    }

    componentWillReceiveProps() {
        console.log("received");
    }

    componentWillUnmount() {
        console.log("unmounted");
    }

    componentDidUpdate() {
        console.log("updated");
    }

    handleClick() {
        this.setState( state => {
            return (state.post === "") ? state.post = "Hello" : state.post = "";
        })
    }

    render() {
        return(
            <Fragment>
                <Preloader isLoading={this.state.isLoading} />
                <h1>Post Page Single</h1>
                <p>{this.state.post}</p>
                <Button onClick={this.handleClick} answer={this.state.post}>Set</Button>
            </Fragment>
        )
    }
}

/**
 * Preloader Component
 * @param {object} props any property
 * @returns {node} html node
 */
const Preloader = (props) => {
    return (
        (props.isLoading) ? <span>Loading</span> : ''
    )
}

export default Post;