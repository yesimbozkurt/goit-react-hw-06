import React from 'react'
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';
import { nanoid } from 'nanoid';
import { Formik, Form, Field } from 'formik';
import 'izitoast/dist/css/iziToast.min.css';
import toast from 'izitoast';



const ContactsForm = () => {
    const dispatch = useDispatch();
    const initialValues = {
        name: '',
        number: '',
    };
    const handleSubmit = (values, actions) => {
        const newContact = {
            id: nanoid(),
            name: values.name.trim(),
            number: values.number.trim(),
        }
        dispatch(addContact(newContact));
        toast.success({
            title: 'Success',
            message: 'Contact added successfully!',
            position: 'topRight',
        });
        actions.resetForm();
    }
    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <Field name="name" placeholder="Name" />
                    <Field name="number" placeholder="Number" />
                    <button type="submit">Add Contact</button>
                </Form>
            </Formik>
        </div>
    )
}

export default ContactsForm;
