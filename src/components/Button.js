import React from 'react';
import { Link } from 'react-router-dom'
import { string } from 'prop-types';
import './button.css'

const Button = ({ to, label }) =>
    <Link id='button' to={to}>
        <h3>{label}</h3>
    </Link>;

Button.propTypes = {
    to: string.isRequired,
    label: string.isRequired
}
export default Button