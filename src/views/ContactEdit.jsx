import React, { Component } from 'react'

import { contactService } from '../services/contact.service'

export class ContactEdit extends Component {

    state = {
        contactToEdit: contactService.getEmptyContact()
    }

    async componentDidMount() {
        this.loadContact()
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadContact()
        }
    }

    loadContact = async () => {
        const contactId = this.props.match.params.id
        if (contactId) {
            const contactToEdit = await contactService.getContactById(contactId)
            this.setState({ contactToEdit: { ...contactToEdit } })
        } else {
            const contactToEdit = contactService.getEmptyContact()
            this.setState({ contactToEdit: { ...contactToEdit } })
        }
    }

    onAddContact = async (ev) => {
        ev.preventDefault()
        try {
            await contactService.saveContact({ ...this.state.contactToEdit })
            this.props.history.push('/contacts')
        } catch (err) {
            console.log('err:', err)
        }
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

        this.setState(({ contactToEdit }) => ({ contactToEdit: { ...contactToEdit, [field]: value } }))
    }

    render() {
        const { name, email, phone } = this.state.contactToEdit

        return (
            <section className='contact-edit'>
                <div className="actions-container">
                    <span onClick={() => this.props.history.goBack()}>Back</span>
                </div>
                <img
                    className="user-img"
                    src={`https://robohash.org/set_set5/${this.props.match.params.id || 0}`}
                    alt=""
                />
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
                    <label htmlFor="email">
                        <input
                            type="text"
                            onChange={this.handleChange}
                            value={email}
                            name="email"
                            id="email"
                            placeholder='Email'
                        />
                    </label>
                    <label htmlFor="phone">
                        <input
                            type="text"
                            onChange={this.handleChange}
                            value={phone}
                            name="phone"
                            id="phone"
                            placeholder='Phone'
                        />
                    </label>
                    <button onClick={(ev) => this.onAddContact(ev)}>Save</button>
                </form>
            </section>
        )
    }
}

export default ContactEdit