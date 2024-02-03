// scss
import "./ContactItem.scss"

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

// navigation
import { useNavigate } from 'react-router-dom'

const ContactItem = ( {store} ) => {
    let navigate = useNavigate()

    const routeChange = () => { 
        navigate('/update-contact')
    }
    
    const imgSrc = (gender, num) => {
        return `https://randomuser.me/api/portraits/${gender.toLowerCase()}/${num}.jpg`
    }

    return (
        <div className="contactItem">
            {store.map((contact) => (
                <div key={contact.id} className="row">
                    <div className="col-4 person">
                        <button>
                            <FontAwesomeIcon icon={faStar}  className="favorite-icon"/>
                        </button>
                        <img src={imgSrc(contact.gender, contact.avatar)} alt="avatar" />
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
                        <button onClick={routeChange}>
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ContactItem