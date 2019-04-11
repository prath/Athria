/**
 * BUTTON COMPONENT
 * 
 * @author Pratama Hasriyan <pratama@hasriyan.com>
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cn from 'classnames';

// import prefix and settings
import Settings from '../../Settings.js'

// load styles
import './button.scss';

/**
 * Default Class
 */
class Button extends Component {
    render() {
        const {children, variant, type, size, classname, ...rest} = this.props;

        // prefix
        const { prefix } = Settings;
        // check props exist
        const isSizeExist = size;
        const isAddClassExist = classname;
        // css classes
        const className = Cn(`${prefix}-btn`, `${prefix}-btn-${variant}`, {[`${prefix}-btn-${size}`]: isSizeExist}, {[`${classname}`]: isAddClassExist});
        
        return(
            <button className={className} type={type} {...rest}>{children}</button>
        )
    }
}

/**
 * Type checking
 */
Button.propTypes = {
    variant: PropTypes.oneOf(['primary','secondary','warning']).isRequired,
    name: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
    size: PropTypes.oneOf(['tiny','small','large']),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    classname: PropTypes.string
}

/**
 * Default type
 */
Button.defaultProps = {
    variant: 'primary',
    type: 'button',
}

export default Button;