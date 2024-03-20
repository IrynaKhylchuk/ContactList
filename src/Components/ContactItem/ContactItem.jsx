// scss
import "./ContactItem.scss"

// icons
import StarBorderIcon from "@mui/icons-material/StarBorder"
import StarIcon from "@mui/icons-material/Star"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"

// link
import { Link } from "react-router-dom"

// hooks
import { useSelector, useDispatch } from "react-redux"

// actions
import { deleteContact, toggleFavorite, filterContactsByCategory } from "../../redux/actions"

const ContactItem = () => {
    const dispatch = useDispatch()
    const contacts = useSelector(state => state.filteredContacts)
    const searchSymbols = useSelector(state => state.searchSymbols)
    const categories = useSelector(state => state.categories)

    const handleFavoriteToggle = (id) => {
        dispatch(toggleFavorite(id))
        dispatch(filterContactsByCategory())
    }

    const filteredContactsToDisplay =
        searchSymbols
            ? contacts.filter(contact => contact.name.toLowerCase().includes(searchSymbols))
            : contacts

    const getCategoryNameById = (categoryId) => {
        let category = categories.find(c => c.id === categoryId)
        return category ? category.category : "Undefined"
    }

    const handleDeleteContact = (id) => {
        dispatch(deleteContact(id))
        dispatch(filterContactsByCategory())
    }

    return (
        <div className="contactItem">
            {filteredContactsToDisplay.map(contact => (
                <div key={contact.id} className="row">
                    <div className="col-6 col-sm-4 person">
                        <button onClick={() => handleFavoriteToggle(contact.id)}>
                            {contact.favorite ? <StarIcon /> : <StarBorderIcon />}
                        </button>
                        <img src={`https://randomuser.me/api/portraits/${contact.gender.toLowerCase()}/${contact.avatar}.jpg`} alt="avatar" />
                        <div className="name-number">
                            <h3 className="font-medium">{contact.name}</h3>
                            <p>{contact.phone}</p>
                        </div>
                    </div>
                    <div className="d-none d-sm-block col-sm-2">
                        <p>{getCategoryNameById(contact.categoryId)}</p>
                    </div>
                    <div className="d-none d-sm-block col-sm-4">
                        <p>{contact.email}</p>
                    </div>
                    <div className="col-6 col-sm-2">
                        <Link to={`/update-contact/${contact.id}`}>
                            <button>
                                <EditIcon />
                            </button>
                        </Link>
                        <button onClick={() => handleDeleteContact(contact.id)}>
                            <DeleteIcon />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ContactItem