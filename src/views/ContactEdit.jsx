import React, { Component, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { contactService } from '../services/contact.service'
import { updateContact } from '../store/actions/contact.actions'

export const ContactEdit = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    
    const [contactToEdit, setContactToEdit] = useState(contactService.getEmptyContact())

    useEffect(() => {
        loadContact()
    }, [id])

    const loadContact = async () => {
        const contactId = id
        let contactToEdit = null
        if (contactId) {
            try {
                contactToEdit = await contactService.getContactById(contactId)
            } catch (err) {
                console.log(err);
                contactToEdit = contactService.getEmptyContact()
            }
        } else {
            contactToEdit = contactService.getEmptyContact()
        }

        setContactToEdit(contactToEdit)
    }

    const onAddContact = async (ev) => {
        ev.preventDefault()
        dispatch(updateContact(contactToEdit))
        navigate('/contacts')
    }

    const handleChange = ({ target }) => {
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

        let tempContact = {...contactToEdit }
        tempContact = {...tempContact, [field]: value }
        setContactToEdit(tempContact)
    }

    const { name, email, phone } = contactToEdit

    return (
        <section className='contact-edit'>
            <div className="actions-container">
                <span onClick={() => navigate('/contacts')}>Back</span>
            </div>
            <img
                className="user-img"
                src={`https://robohash.org/set_set5/${id || 0}`}
                alt=""
            />
            <form className='form'>
                <label htmlFor="name">
                    <input
                        type="text"
                        onChange={handleChange}
                        value={name}
                        name="name"
                        id="name"
                        placeholder='Name'
                    />
                </label>
                <label htmlFor="email">
                    <input
                        type="text"
                        onChange={handleChange}
                        value={email}
                        name="email"
                        id="email"
                        placeholder='Email'
                    />
                </label>
                <label htmlFor="phone">
                    <input
                        type="text"
                        onChange={handleChange}
                        value={phone}
                        name="phone"
                        id="phone"
                        placeholder='Phone'
                    />
                </label>
                <button onClick={(ev) => onAddContact(ev)}>Save</button>
            </form>
        </section>
    )
}
