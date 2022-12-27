import { Component } from 'react'

import { contactService } from '../services/contact.service'
import { userService } from '../services/user.service';

import { Trash, Pen } from 'react-bootstrap-icons';

import TransferFund from '../cmps/TransferFund.jsx';

export class ContactDetails extends Component {

    state = {
        contact: null
    }

    componentDidMount() {
        this.loadContact()
    }

    loadContact = async () => {
        if (!this.props?.match?.params?.id) return
        const contact = await contactService.getContactById(this.props.match.params.id)
        this.setState({ contact })
    }

    onRemoveContact = async (contactId) => {
        try {
            await contactService.deleteContact(contactId);
            this.setState(({ contacts }) => ({
                contacts: contacts.filter((contact) => contact._id !== contactId),
            }));
            this.props.history.push(`/contacts`);
        } catch (err) {
            console.log("err:", err);
        }
    };

    moveFunds = (amount) => {
        userService.addMove({to: this.state.contact._id, amount})
    }

    onSelectContactId = (id) => {
        this.props.history.push(`/contact/${id}`);
    }

    onEditContact = (id) => {
        this.props.history.push(`/contact/edit/${id}`);
    }


    render() {
        const { contact } = this.state
        if (!contact) return <div>Loading...</div>
        return (
            <section className='contact-details'>
                <div className='actions-container flex justify-between p-i-5'>
                    <button onClick={() => this.props.history.goBack()}>Back</button>
                    <div className='crud-actions flex g-5'>
                        <button onClick={(ev) => { ev.stopPropagation(); this.onEditContact(contact._id) }}><Pen /></button>
                        <button onClick={(ev) => { ev.stopPropagation(); this.onRemoveContact(contact._id) }}><Trash /></button>
                    </div>
                </div>
                <img
                    className="user-img"
                    src={`https://robohash.org/set_set5/${contact._id}`}
                    alt=""
                />
                <section className='user-data'>
                    <h3>{contact.name}</h3>
                    <h3>{contact.email}</h3>
                    <h3>{contact.phone}</h3>
                </section>
                <TransferFund moveFunds={this.moveFunds}/>
            </section>
        )
    }
}
