import { Trash, Pen } from 'react-bootstrap-icons';

export function ContactPreview({
    contact,
    onSelectContactId,
    onRemoveContact,
    onEditContact
}) {
    return (
        <section onClick={(ev) => {onSelectContactId(contact._id)}} className="contact-preview">
            <div className='actions-container flex justify-between p-i-5'>
                <button onClick={(ev) => {ev.stopPropagation();onEditContact(contact._id)}}><Pen /></button>
                <button onClick={(ev) => {ev.stopPropagation();onRemoveContact(contact._id)}}><Trash /></button>
            </div>
            <img
                className="user-img"
                src={`https://robohash.org/set_set5/${contact._id}`}
                alt=""
            />
            <h2>{contact.name}</h2>
        </section>
    );
}


