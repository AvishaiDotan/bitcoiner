import { ContactPreview } from "./ContactPreview";

export function ContactList({ contacts, onSelectContactId, onRemoveContact, onEditContact }) {

    return (
        <section className="contact-list grid grid template-column auto-fit min-200">
            {contacts.map(contact =>
                <ContactPreview
                    key={contact._id}
                    contact={contact}
                    onRemoveContact={onRemoveContact}
                    onSelectContactId={onSelectContactId}
                    onEditContact={onEditContact}
                />
            )}
        </section>
    )
}
