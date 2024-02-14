import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from "./type"

const initialState = {
    contacts: [
        {
          id: 'cb1f89af-e866-4ca7-9118-e9e74c2dc0e2',
          name: 'John',
          phone: '1234567890',
          email: 'johnDoe@mail.com',
          avatar: 45,
          gender: 'Men',
          category: 'Other',
          favorite: true
        },
        {
          id: 'cb1f89af-e866-4ca7-9118-e9e74c2dc0e3',
          name: 'Jane',
          phone: '1234567890',
          email: 'janeDoe@mail.com',
          avatar: 55,
          gender: 'Women',
          category: 'Other',
          favorite: true
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
                contacts: state.contacts.filter[contact => contact.id !== action.payload]
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
        default:
            return state
    }
}

export default reducer