// scss
import "./ContactItem.scss"

// icons
import StarBorderIcon from '@mui/icons-material/StarBorder'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

// link
import { Link } from "react-router-dom"

// hooks
import { useSelector, useDispatch } from "react-redux"

// actions
import { deleteContact } from "../../redux/actions"

const ContactItem = ( ) => {
    const contacts = useSelector(state => state.contacts)
    const dispatch = useDispatch()

    const handleDeleteContact = (id) => {
        dispatch(deleteContact(id))
    }

    return (
        <div className="contactItem">
            {contacts.map((contact) => (
                <div key={contact.id} className="row">
                    <div className="col-4 person">
                        <button>
                            <StarBorderIcon/>
                        </button>
                        <img src={`https://randomuser.me/api/portraits/${contact.gender.toLowerCase()}/${contact.avatar}.jpg`} alt="avatar" />
                        <div className="name-number">
                            <h3 className="font-medium">{contact.name}</h3>
                            <p>{contact.phone}</p>
                        </div>
                    </div>
                    <div className="col-2">
                        <p>{contact.category}</p>
                    </div>
                    <div className="col-4">
                        <p>{contact.email}</p>
                    </div>
                    <div className="col-2">
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