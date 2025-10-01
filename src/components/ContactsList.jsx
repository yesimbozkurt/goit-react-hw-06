import React from 'react'
import { useSelector } from 'react-redux';
import { selectContacts } from '../redux/contactsSlice';
import { selectNameFilter } from '../redux/filtersSlice';
import Contact from './Contact';
import css from './ContactsList.module.css';
const ContactsList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);
    const filteredContacts = contacts
        .filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    return (
        <div className={css.contactsList}>
            {filteredContacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
            ))}
        </div>
    )
}

export default ContactsList
