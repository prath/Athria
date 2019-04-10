import React, { Component } from 'react';
import './button.scss';
import PropTypes from 'prop-types';
// import cx from 'classnames';

/**
 * BUTTON OPTIONS.
 */
// Variant
export const ButtonVariant = {
    PRIMARY: "primary", 
    SECONDARY: "secondary", 
    DANGER: "danger", 
    WARNING: "warning"
};

// Sizes
export const ButtonSize ={
    BIG: "big",
    MEDIUM: "medium",
    SMALL: "small",
    TINY: "tiny"
}

export const ButtonType = {
    BUTTON: 'button',
    RESET: 'reset',
    SUBMIT: 'submit'
}

class Button extends Component {
    render() {
        const {children, variant, type, size, classname, ...rest} = this.props;

        // css classes
        let classes = `btn btn-${variant}`;
        // check if size defined
        if (size) {
            classes += ` btn-${size}`
        }
        // check if additional classes defined
        if (classname) {
            classes += ` ${classname}`;
        }
        
        return(
            <button className={classes} type={type} {...rest}>{children}</button>
        )
    }
}

Button.propTypes = {
    variant: PropTypes.string.isRequired,
    name: PropTypes.string,
    type: PropTypes.string.isRequired,
    size: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    classname: PropTypes.string
}

Button.defaultProps = {
    variant: ButtonVariant.PRIMARY,
    type: ButtonType.BUTTON,
}

export default Button;