
import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = () => {
    return (
        <Link className='custom-button' to='/elenco'>
            <h3>
                Ver Elenco
            </h3>
        </Link>
    )
};

export default Button;