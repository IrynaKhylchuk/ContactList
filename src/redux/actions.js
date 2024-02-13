import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from "./type"

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

export const updateContact = (id) => {
    return {
        type: UPDATE_CONTACT,
        payload: id
    }
}