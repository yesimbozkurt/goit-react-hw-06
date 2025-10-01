import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';
import toast from 'izitoast';


const Contact = ({ contact }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(contact.id));
        toast.info({
            title: 'Deleted',
            message: 'Contact deleted!',
            position: 'topRight',
        });
    };
    if (!contact || !contact.name) return null;

    return (
        <div>
            <span>{contact.name}: {contact.number}</span>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Contact
