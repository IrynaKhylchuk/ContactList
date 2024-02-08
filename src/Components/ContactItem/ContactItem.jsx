// scss
import "./ContactItem.scss"

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

// link
import { Link } from "react-router-dom"

const ContactItem = ( {store, onDeleteContact, onEditContact} ) => {
    const deleteContact = (id) => {
        onDeleteContact(id)
    }

    const editContact = (id) => {
        onEditContact(id)
    }

    return (
        <div className="contactItem">
            {store.map((contact) => (
                <div key={contact.id} className="row">
                    <div className="col-4 person">
                        <button>
                            <FontAwesomeIcon icon={faStar}  className="favorite-icon"/>
                        </button>
                        <img src={`https://randomuser.me/api/portraits/${contact.gender.toLowerCase()}/${contact.avatar}.jpg`} alt="avatar" />
                        <div className="name-number">
                            <h3 className="font-medium">{contact.name}</h3>
                            <p>{contact.phone}</p>
                        </div>
                    </div>
                    <div className="col-2">
                        <p>{contact.status}</p>
                    </div>
                    <div className="col-4">
                        <p>{contact.email}</p>
                    </div>
                    <div className="col-2">
                        <Link to='/update-contact'>
                            <button onClick={() => editContact(contact.id)}>
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                        </Link>
                        <button onClick={() => deleteContact(contact.id)}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ContactItem