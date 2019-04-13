/**
 * POST VIEW
 * 
 * @author Pratama Hasriyan <pratama@hasriyan.com>
 */

 import React, { Component, Fragment } from 'react';
//  import { Link } from 'react-router-dom';

// Load Dummy Data
// import PostData from '../_DummyData/Post';

 /**
  * Default Class
  */
 class Post extends Component {
    //  constructor (props){
    //      super(props)
    //  }
     render() {
        const {match} = this.props;
        return(
            <Fragment>
                <h1>Post Page Single</h1>
                <ul>
                    
                </ul>
            </Fragment>
         )
     }
 }

 export default Post;