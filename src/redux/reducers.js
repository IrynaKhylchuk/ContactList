import {
    ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT, SEARCH_CONTACT,
    FILTERED_CONTACTS, ADD_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY, TOGGLE_FAVORITE,
    FILTER_CONTACTS_BY_CATEGORY
} from "./type"

let contactList = [
    {
        id: "cb1f89af-e866-4ca7-9118-e9e74c2dc0e2",
        name: "John",
        phone: "1234567890",
        email: "johnDoe@mail.com",
        avatar: 45,
        gender: "Men",
        categoryId: "cb1f89af-e866-4ca7-9118-e9e74c2dc0e4",
        favorite: true
    },
    {
        id: "cb1f89af-e866-4ca7-9118-e9e74c2dc0e3",
        name: "Jane",
        phone: "1234567890",
        email: "janeDoe@mail.com",
        avatar: 55,
        gender: "Women",
        categoryId: "cb1f89af-e866-4ca7-9118-e9e74c2dc0e4",
        favorite: true
    }
]

const initialState = {
    contacts: contactList,
    searchSymbols: "",
    categories: [
        {
            id: "cb1f89af-e866-4ca7-9118-e9e74c2dc0e4",
            category: "Other",
            contacts: [
                "cb1f89af-e866-4ca7-9118-e9e74c2dc0e2",
                "cb1f89af-e866-4ca7-9118-e9e74c2dc0e3"
            ]
        }
    ],
    filteredContacts: contactList
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload],
                categories: state.categories.map(category => {
                    if (category.id === action.payload.categoryId) {
                        category.contacts.push(action.payload.id)
                    }
                    return category
                })
            }
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload),
                categories: state.categories.map(category => {
                    const contact = state.contacts.find(c => c.id === action.payload)
                    if (category.id === contact.categoryId) {
                        category.contacts = category.contacts.filter(id => id !== contact.id)
                    }
                    return category
                })
            }
        case TOGGLE_FAVORITE:
            return {
                ...state,
                contacts: state.contacts.map(contact => {
                    if (contact.id === action.payload) {
                        return { ...contact, favorite: !contact.favorite }
                    }
                    return contact
                })
            }
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact => {
                    let updatedContact = action.payload

                    if (contact.id === updatedContact.id) {
                        return { ...contact, ...updatedContact }
                    }
                    return contact
                }),
                categories: state.categories.map(category => {
                    const contactId = action.payload.id
                    const newCategoryId = action.payload.categoryId
                    const oldCategoryId = state.contacts.find(c => c.id === contactId).categoryId

                    if (newCategoryId !== oldCategoryId) {
                        const newCategory = state.categories.find(c => c.id === newCategoryId)
                        const oldCategory = state.categories.find(c => c.id === oldCategoryId)

                        oldCategory.contacts = oldCategory.contacts.filter(id => id !== contactId)

                        if (newCategory.contacts.findIndex(id => id === contactId) === -1) {
                            newCategory.contacts.push(contactId)
                        }
                    }
                    return category
                })
            }
        case SEARCH_CONTACT:
            return {
                ...state,
                searchSymbols: action.payload
            }
        case FILTERED_CONTACTS:
            return {
                ...state,
                contacts: state.contacts.filter(contact => action.payload.contacts.includes(contact.id))
            }
        case ADD_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, action.payload]
            }
        case DELETE_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter(category => category.id !== action.payload)
            }
        case UPDATE_CATEGORY:
            return {
                ...state,
                categories: state.categories.map(category => {
                    let updatedCategory = action.payload

                    if (category.id === updatedCategory.id) {
                        return { ...category, ...updatedCategory }
                    } return category
                })
            }
        case FILTER_CONTACTS_BY_CATEGORY:
            return {
                ...state,
                filteredContacts: action.payload
                    ? state.contacts.filter(c => c.categoryId === action.payload)
                    : state.contacts
            }
        default:
            return state
    }
}

export default reducer