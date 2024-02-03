// scss
import './ContactList.scss'

// components
import Sidebar from '../../Components/Sidebar/Sidebar'
import ContactItem from '../../Components/ContactItem/ContactItem'

const ContactList = ( {store} ) => {
    return (
        <main className='container'>
            <div className="row">
                <div className="col-3">
                    <Sidebar />
                </div>
                <div className="col-9">
                    <ContactItem store={store}/>
                </div>
            </div>
        </main>
    )
}

export default ContactList