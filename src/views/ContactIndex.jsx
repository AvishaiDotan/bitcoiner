import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom"

import { loadContacts, removeContact, setFilterBy } from "../store/actions/contact.actions";

import { ContactFilter } from "../cmps/ContactFilter";
import { ContactList } from "../cmps/ContactList";

export const ContactIndex = () => {
    const navigate = useNavigate()

    const contacts = useSelector(state => state.contactModule.contacts)
    const filterBy = useSelector(state => state.contactModule.filterBy)
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadContacts())
    }, [contacts?.length, filterBy])

    useEffect(() => {
        dispatch(removeContact())
    }, [])

    const onRemoveContact = async (contactId) => {
        dispatch(removeContact(contactId))
    };

    const onChangeFilter = (filterBy) => {
        dispatch(setFilterBy(filterBy))
    };

    const onSelectContactId = (id) => {
        navigate(`/contact/${id}`)
    }

    const onEditContact = (id) => {
        navigate(`/contact/edit/${id}`)
    }


    // const { contacts, filterBy } = this.state;
    if (!contacts) return (<div>Loading...</div>);
    return (
        <section className="contact-index">
            <ContactFilter
                onChangeFilter={onChangeFilter}
                filterBy={filterBy}
            />
            <ContactList
                onRemoveContact={onRemoveContact}
                onSelectContactId={onSelectContactId}
                onEditContact={onEditContact}
                contacts={contacts}
            />
        </section>
    );

}
