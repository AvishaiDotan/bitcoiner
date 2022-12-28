import { contactService } from "../../services/contact.service"

export function loadContacts() {
    
    return async (dispatch, getState) => {
        try {
            const filterBy = getState().contactModule.filterBy
            const contacts = await contactService.getContacts(filterBy)
            dispatch({ type: 'SET_CONTACTS', contacts })
            return 'hello'
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function removeContact(contactId) {
    return async (dispatch) => {
        try {
            const contacts = await contactService.deleteContact(contactId)
            dispatch({ type: 'REMOVE_CONTACT', contactId })
            return 'hello'
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function updateContact(contact) {
    if (contact._id) {
        return putContact(contact)
    } 
    return postContact(contact)
}

export function putContact(contact) {
    return async (dispatch) => {
        try {
            const updatedContact = await contactService.saveContact(contact)
            console.log("🚀 ~ file: contact.actions.js:40 ~ return ~ updatedContact", updatedContact)
            
            dispatch({ type: 'UPDATE_CONTACT', updatedContact })
        } catch (err) {
            console.log('err:', err)
        }
    }
}


export function postContact(contact) {
    return async (dispatch) => {
        try {
            const savedContact = await contactService.saveContact(contact)
            dispatch({ type: 'ADD_CONTACT', savedContact })
        } catch (err) {
            console.log('err:', err)
        }
    }
}


export function setFilterBy(filterBy) {

    return (dispatch) => {
        try {
            dispatch({ type: 'SET_FILTER_BY', filterBy: { ...filterBy } })
        } catch (err) {
            console.log('err:', err)
        }
    }
}