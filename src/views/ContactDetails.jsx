import { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"

import { contactService } from '../services/contact.service'
import { userService } from '../services/user.service';

import { Trash, Pen } from 'react-bootstrap-icons';

import TransferFund from '../cmps/TransferFund.jsx';
import { useParams } from 'react-router-dom';

import { removeContact } from '../store/actions/contact.actions';
import { useDispatch } from 'react-redux';
import { addMove } from '../store/actions/user.actions';


export const ContactDetails = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [contact, setContact] = useState()
    const params = useParams()

    useEffect(() => {
        ;(async () => {
            try {
                const contact = await contactService.getContactById(params.id)
                if (contact) {
                    setContact(contact)
                }
            } catch (err) {
                console.log(err)
            }
        })()
    }, [contact])

    const onRemoveContact = (ev) => {
        ev.stopPropagation()
        const {id} = params
        dispatch(removeContact(id))
        navigate('/contacts')
        return
    };

    const moveFunds = (amount) => {
        const move = { to: contact._id, amount }
        dispatch(addMove(move))
    }

    const onEditContact = (ev) => {
        ev.stopPropagation()
        const {id} = params
        navigate(`/contact/edit/${id}`);
    }


    if (!contact) return <div>Loading...</div>
    return (
        <section className='contact-details'>
            <div className='actions-container flex justify-between p-i-5'>
                <button onClick={() => navigate(-1)}>Back</button>
                <div className='crud-actions flex g-5'>
                    <button onClick={(ev) => onEditContact(ev)}><Pen /></button>
                    <button onClick={(ev) => onRemoveContact(ev)}><Trash /></button>
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
            <TransferFund moveFunds={moveFunds} />
        </section>
    )

}
