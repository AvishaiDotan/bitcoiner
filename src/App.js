import { Component } from 'react'
import { HashRouter as Router, Route, Routes, Switch } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
// import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { User } from './views/User'


import './assets/scss/main.scss'

import { AppHeader } from './cmps/AppHeader'
import { ContactIndex } from './views/ContactIndex'
import { ContactDetails } from "./views/ContactDetails";
import {ContactEdit} from './views/ContactEdit'
import {SignupPage} from './views/SignupPage'

import { userService } from './services/user.service'
import { Charts } from './views/Charts'
import { Home } from './views/Home'


export const App = () => {

    const loggedInUser = useSelector(state => state.userModule.loggedInUser)

    return (
        <Router>
            <div className='main-layout'>
                <AppHeader />
                <main>
                    <Routes>
                        <Route path="/contacts" element={<ContactIndex />} />
                        <Route path="/contact/edit/:id" element={<ContactEdit />} />
                        <Route path="/contact/edit/" element={<ContactEdit />} />
                        <Route path="/contact/:id" element={<ContactDetails />} />
                        <Route path="/charts" element={<Charts />} />
                        <Route path="/user" element={<User />} />
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </main>
            </div>
        </Router>
    )
}
