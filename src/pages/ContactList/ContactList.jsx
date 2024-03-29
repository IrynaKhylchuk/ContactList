// scss
import "./ContactList.scss"

// components
import Sidebar from "../../Components/Sidebar/Sidebar"
import ContactItem from "../../Components/ContactItem/ContactItem"

const ContactList = () => {
    return (
        <main className="container">
            <div className="row">
                <div className="col-12 col-md-3">
                    <Sidebar />
                </div>
                <div className="col-12 col-md-9">
                    <ContactItem />
                </div>
            </div>
        </main>
    )
}

export default ContactList