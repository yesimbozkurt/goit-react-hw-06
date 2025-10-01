import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact(state, action) {
            const contact = action.payload;
            if (contact && contact.name && contact.number) {
                state.items.push(contact);
            }
        },
        deleteContact(state, action) {
            state.items = state.items.filter(
                (contact) => contact.id !== action.payload
            );
        },
    },
});

export const selectContacts = (state) => {
    const search = state.filters.search.toLowerCase();
    if (search) {
        return state.contacts.items.filter(
            (contact) =>
                contact.name.toLowerCase().includes(search) ||
                contact.number.includes(state.filters.search)
        );
    }
    return state.contacts.items;
};

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
