import React, { Component } from 'react';
import './button-primary.scss';

class ButtonPrimary extends Component {
    render() {
        const {text, ...rest} = this.props;
        return(
            <button className="btn-primary big" {...rest}>{text}</button>
        )
    }
}

export default ButtonPrimary;