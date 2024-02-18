import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT, SEARCH_CONTACT, ADD_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY } from "./type"

const initialState = {
    contacts: [
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
    ],
    seacrhSymbols: '',
    categories: [
        {
            id: "cb1f89af-e866-4ca7-9118-e9e74c2dc0e4",
            category: "Other",
            numberOfContacts: 0
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact => {
                    let updatedContact = action.payload

                    if (contact.id === updatedContact.id) {
                      return {...contact, ...updatedContact}
                    } return contact
                  })
            }
        case SEARCH_CONTACT:
            return {
                ...state,
                seacrhSymbols: action.payload
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
                    let contactCategory = state.contacts.map(contact => contact.category)

                    if (category.id === updatedCategory.id) {
                        if(category.category === contactCategory) {
                            return contactCategory[0] = updatedCategory.category
                        }
                        return {...category, ...updatedCategory}
                    } return category
                })
            }
        default:
            return state
    }
}

export default reducer