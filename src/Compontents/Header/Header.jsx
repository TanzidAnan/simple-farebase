import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='gap-5'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/login'>Login</NavLink>
        </div>
    );
};

export default Header;