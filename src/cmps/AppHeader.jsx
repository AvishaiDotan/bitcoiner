import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {useSelector } from 'react-redux'

import { CurrencyBitcoin } from 'react-bootstrap-icons';

import { List } from 'react-bootstrap-icons';
import { Slider } from './Slider';

export const AppHeader = () => {
    const [isSlider, setIsSlider] = useState(false)
    const loggedInUser = useSelector(state => state.userModule.loggedInUser)

    return (
        <header className='full main-header main-layout'>
            <section className='header-wrapper flex justify-between align-center '>
                <NavLink className='logo' to={'/'}>
                    <h1><CurrencyBitcoin />BitCoiner</h1>
                </NavLink>
                <nav>
                    <ul className='flex g-20 desktop-media'>
                        <NavLink to={'/contacts'}>Contacts</NavLink>
                        <NavLink to="/charts">Charts</NavLink>
                        <NavLink to="/contact/edit">Add Contact</NavLink>
                        {loggedInUser && <NavLink to="/user">User</NavLink>}
                        {!loggedInUser && <NavLink to="/signup">Signup</NavLink>}
                    </ul>
                </nav>
                <section className='mobile-media'>
                    <List className='list' onClick={() => setIsSlider(!isSlider)}/>
                    {isSlider && <Slider setSlider={() => setIsSlider(!isSlider)}/>}
                </section>
            </section>
        </header>
    )
}
