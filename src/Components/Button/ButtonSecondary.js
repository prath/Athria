import React, { Component } from 'react';
import './button-secondary.scss';

class ButtonSecondary extends Component {
    render() {
        const {text, ...rest} = this.props;
        return(
            <button className="btn-secondary big" {...rest}>{text}</button>
        )
    }
}

export default ButtonSecondary;