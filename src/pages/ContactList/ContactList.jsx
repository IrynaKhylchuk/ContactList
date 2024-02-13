// scss
import './ContactList.scss'

// components
import Sidebar from '../../Components/Sidebar/Sidebar'
import ContactItem from '../../Components/ContactItem/ContactItem'

const ContactList = ({ categories, onNewCategory, onDeleteCategory, onEditCategory}) => {
    return (
        <main className='container'>
            <div className="row">
                <div className="col-3">
                    <Sidebar categories={categories} onNewCategory={onNewCategory} 
                    onDeleteCategory={onDeleteCategory} onEditCategory={onEditCategory}/>
                </div>
                <div className="col-9">
                    <ContactItem />
                </div>
            </div>
        </main>
    )
}

export default ContactList