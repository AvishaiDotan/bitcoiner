import React, { Component } from 'react'

import { contactService } from '../services/contact.service'
import { userService } from '../services/user.service'

export class SignupPage extends Component {

    state = {
        user: {
            name: '',
            password: '',
        }
    }

    async componentDidMount() {
        this.loadUser()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadContact()
        }
    }

    loadUser = async () => {
        const user = userService.getUser()
        this.setState({user})
    }

    signup = async (ev) => {
        ev.preventDefault()
        userService.signUp({...this.state.user})
        this.props.history.push('/user')
    }

    handleChange = ({ target }) => {
        const field = target.name
        let value = target.value
        switch (target.type) {
            case 'number':
            case 'range':
                value = +value
                break;
            case 'checkbox':
                value = target.checked
                break
            default:
                break;
        }

        this.setState(({ user }) => ({ user: { ...user, [field]: value } }))
    }

    render() {
        const { name, password } = this.state.user

        return (
            <section className='signup-container'>
                <div className="actions-container">
                    <span onClick={() => this.props.history.goBack()}>Back</span>
                </div>
                <form className='form'>
                    <label htmlFor="name">
                        <input
                            type="text"
                            onChange={this.handleChange}
                            value={name}
                            name="name"
                            id="name"
                            placeholder='Name'
                        />
                    </label>
                    <label htmlFor="password">
                        <input
                            type="number"
                            onChange={this.handleChange}
                            value={password}
                            name="password"
                            id="password"
                            placeholder='Password'
                        />
                    </label>
                    <button onClick={(ev) => this.signup(ev)}>Signup</button>
                </form>
            </section>
        )
    }
}

export default SignupPage