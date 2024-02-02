// scss
import "./ContactItem.scss"

import { useEffect, useState } from "react"


const ContactItem = ( {store} ) => {
    const imgSrc = (gender, num) => {
        return `https://randomuser.me/api/portraits/${gender.toLowerCase()}/${num}.jpg`
    }

    const contact = JSON.parse(localStorage.getItem('contact'))

    return (
        <div className="contactItem">
            {store.map((contact) => (
                <div key={contact.id}>
                    <img src={imgSrc(contact.gender, contact.avatar)} alt="avatar" />
                    <div>
                        <h3 className="font-medium">{contact.name}</h3>
                        <p>{contact.email}</p>
                        <p>{contact.phone}</p>
                        <p>{contact.status}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ContactItem