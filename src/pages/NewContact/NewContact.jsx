// scss
import './NewContact.scss'

// form
import {Formik, Form, Field, ErrorMessage} from 'formik'
import { validationSchema } from '../../assets/validation/validation'

// id
import {v4 as uuidv4} from 'uuid'

// navigation
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addContact } from '../../redux/actions'

const NewContact = ({ categories }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const initialValues = {
        id: uuidv4(),
        name: '',
        phone: '',
        email: '',
        avatar: '',
        gender: '',
        category: '',
        favorite: false
    }

    const handleSubmit = (values) => {
        dispatch(addContact(values))
        navigate('/')
    }

    return (
        <div className="container app-background">
            <div className="AddPage">
                <div>
                    <h1 className='font-medium'>Add New Contact</h1>
                </div>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {({ isSubmitting }) => (
                    <Form>
                        <div className="row">
                            <div className='col-6'>
                                <label htmlFor="name">Name</label>
                                <Field type="text" name="name" id="name" placeholder="John Doe"/>
                                <ErrorMessage name="name" component="p" className="text-danger"/>
                            </div>
                            <div className='col-6'>
                                <label htmlFor="phone">Phone</label>
                                <Field type="text" name="phone" id="phone" placeholder="+380123456789"/>
                                <ErrorMessage name="phone" component="p" className="text-danger"/>
                            </div>
                        </div>
                        <div className="row">     
                            <div className='col-6'>
                                <label htmlFor="email">Email</label>
                                <Field type="email" name="email" id="email" placeholder="johndoe@mail.com"/>
                                <ErrorMessage name="email" component="p" className="text-danger"/>
                            </div>                    
                            <div className='col-6'>
                                <label htmlFor="avatar">Avatar</label>
                                <Field type="number" name="avatar" id="avatar" placeholder="0-99" min={0} max={99}/>
                                <ErrorMessage name="avatar" component="p" className="text-danger"/>
                            </div>
                        </div>                         
                        <div>
                            <label htmlFor="gender">Gender</label>
                            <Field as="select" name="gender">
                                <option value="" disabled hidden>Choose gender</option>
                                <option value="Men">Men</option>
                                <option value="Women">Women</option>
                            </Field>
                            <ErrorMessage name="gender" component="p" className="text-danger"/>
                        </div>                    
                        <div>
                            <label htmlFor="category">category</label>
                            <Field as="select" name="category">
                                <option value="" disabled hidden>Choose category</option>
                                {categories.map((category) => (
                                    <option key={category.category} value={category.category}>
                                        {category.category} 
                                    </option>
                                ))}
                            </Field>
                            <ErrorMessage name="category" component="p" className="text-danger"/>
                        </div>                    
                        <div>
                            <label htmlFor="favorite">Favorite</label>
                            <Field type="checkbox" name="favorite" id="favorite"/>
                            <ErrorMessage name="favorite" component="p" className="text-danger"/>
                        </div>    
                        <button type="submit">Add</button>                
                    </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default NewContact