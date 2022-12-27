import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import { CurrencyBitcoin } from 'react-bootstrap-icons';

function _AppHeader() {
    return (
        <header className='full main-header main-layout'>
            <section className='header-wrapper flex justify-between align-center '>
                <NavLink className='logo' to={'/'}>
                    <h1 ><CurrencyBitcoin />BitCoiner</h1>
                </NavLink>
                <nav>
                    <ul className='flex g-20'>
                        <NavLink to={'/contacts'}>Contacts</NavLink>
                        <NavLink to="/charts">Charts</NavLink>
                        <NavLink to="/user">User</NavLink>
                        <NavLink to="/signup">Signup</NavLink>
                    </ul>
                </nav>
            </section>
        </header>
    )
}

export const AppHeader = withRouter(_AppHeader)
