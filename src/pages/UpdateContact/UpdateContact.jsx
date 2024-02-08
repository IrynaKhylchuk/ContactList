// scss
import './UpdateContact.scss'

// form
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { validationSchema } from './validation/validation'

// navigation
import { useNavigate } from 'react-router-dom'

const UpdateContact = ( { store, getUserId, onSave } ) => {
    let contact = store.filter(contact => contact.id === getUserId())

    const initialValues = {
        id: contact[0].id,
        name: contact[0].name,
        phone: contact[0].phone,
        email: contact[0].email,
        avatar: contact[0].avatar,
        gender: contact[0].gender,
        status: contact[0].status,
        favorite: contact[0].favorite
    }

    const navigate = useNavigate()

    const handleSubmit = (values) => {
        onSave(values)
        navigate('/')
    }

    return (
        <div className="container app-background">
            <div className="AddPage">
                <div>
                    <h1 className='font-medium'>Edit Contact</h1>
                </div>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {({ isSubmitting }) => (
                    <Form>
                        <div className="row">
                            <div className='col-6'>
                                <label htmlFor="name">Name</label>
                                <Field type="text" name="name" id="name" placeholder="John Doe"/>
                                <ErrorMessage name="name" component="p" className="text-danger position-absolute"/>
                            </div>
                            <div className='col-6'>
                                <label htmlFor="phone">Phone</label>
                                <Field type="text" name="phone" id="phone" placeholder="+380123456789"/>
                                <ErrorMessage name="phone" component="p" className="text-danger position-absolute"/>
                            </div>
                        </div>
                        <div className="row">     
                            <div className='col-6'>
                                <label htmlFor="email">Email</label>
                                <Field type="email" name="email" id="email" placeholder="johndoe@mail.com"/>
                                <ErrorMessage name="email" component="p" className="text-danger position-absolute"/>
                            </div>                    
                            <div className='col-6'>
                                <label htmlFor="avatar">Avatar</label>
                                <Field type="number" name="avatar" id="avatar" placeholder="0-99" min={0} max={99}/>
                                <ErrorMessage name="avatar" component="p" className="text-danger position-absolute"/>
                            </div>
                        </div>                         
                        <div>
                            <label htmlFor="gender">Gender</label>
                            <Field as="select" name="gender">
                                <option value="" disabled hidden>Choose gender</option>
                                <option value="Men">Men</option>
                                <option value="Women">Women</option>
                            </Field>
                            <ErrorMessage name="gender" component="p" className="text-danger position-absolute"/>
                        </div>                    
                        <div>
                            <label htmlFor="status">Status</label>
                            <Field as="select" name="status">
                                <option value="" disabled hidden>Choose status</option>
                                <option value="Work">Work</option>
                                <option value="Family">Family</option>
                                <option value="Private">Private</option>
                                <option value="Friends">Friends</option>
                            </Field>
                            <ErrorMessage name="status" component="p" className="text-danger position-absolute"/>
                        </div>                    
                        <div>
                            <label htmlFor="favorite">Favorite</label>
                            <Field type="checkbox" name="favorite" id="favorite"/>
                        </div>    
                        <button type="submit">Save</button>                
                    </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default UpdateContact