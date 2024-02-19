import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT, SEARCH_CONTACT, FILTERED_CONTACTS, ADD_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY } from "./type"

export const addContact = (newContact) => {
    return {
        type: ADD_CONTACT,
        payload: newContact
    }
}

export const deleteContact = (id) => {
    return {
        type: DELETE_CONTACT,
        payload: id
    }
}

export const updateContact = (updatedContact) => {
    return {
        type: UPDATE_CONTACT,
        payload: updatedContact
    }
}

export const searchContact = (seacrhSymbols) => {
    return {
        type: SEARCH_CONTACT,
        payload: seacrhSymbols.toLowerCase()
    }
}

export const filteredContacts = (filteredContactsArr) => {
    return {
        type: FILTERED_CONTACTS,
        payload: filteredContactsArr
    }
}

export const addCategory = (newCategory) => {
    return {
        type: ADD_CATEGORY,
        payload: newCategory
    }
}

export const deleteCategory = (id) => {
    return {
        type: DELETE_CATEGORY,
        payload: id
    }
}

export const updateCategory = (updatedCategory) => {
    return {
        type: UPDATE_CATEGORY,
        payload: updatedCategory
    }
}