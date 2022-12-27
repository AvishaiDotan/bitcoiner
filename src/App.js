import { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import { User } from './views/User'


import './assets/scss/main.scss'

import { AppHeader } from './cmps/AppHeader'
import { ContactIndex } from './views/ContactIndex'
import { ContactDetails } from "./views/ContactDetails";
import ContactEdit from './views/ContactEdit'
import SignupPage from './views/SignupPage'

import { userService } from './services/user.service'
import { Charts } from './views/Charts'


export class App extends Component {
    state = {
        user: null,
    }

    componentDidMount() {
        this.setState({ user: userService.getUser() }, () => {
            console.log(this.state.user)
        })
    }

    render() {
        const { user } = this.state
        if (!user) return <div>Loading...</div>

        return (
            <Router>
                <div className='main-layout'>
                    <AppHeader />
                    <main>
                        <Switch>
                            <Route path="/contact/edit/:id?" component={ContactEdit} />
                            <Route path="/contact/:id" component={ContactDetails} />
                            <Route path="/contacts" component={ContactIndex} />
                            <Route path="/charts" component={Charts} />
                            <Route path="/user" component={User}/>
                            <Route path="/signUp" component={SignupPage} />
                        </Switch>
                    </main>

                    <footer>
                        <section>contactRights 2022 &copy;</section>
                    </footer>
                </div>
            </Router>
        )
    }
}
