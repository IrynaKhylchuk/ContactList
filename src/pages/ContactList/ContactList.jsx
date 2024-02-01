import './ContactList.scss'

//import components
import Sidebar from '../../Components/Sidebar/Sidebar'
import ContactItem from '../../Components/ContactItem/ContactItem'

const ContactList = () => {
    return (
        <main className='container rounded'>
            <div className="row">
                <div className="col-3">
                    <Sidebar />
                </div>
                <div className="col-9">
                    <ContactItem />
                </div>
            </div>
        </main>
    )
}

export default ContactList