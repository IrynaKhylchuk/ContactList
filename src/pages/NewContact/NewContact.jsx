import './NewContact.scss'

// valid
import * as Yup from 'yup'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import {v4 as uuidv4} from 'uuid'

const NewContact = () => {
    const initialValues = {
        id: uuidv4(),
        name: '',
        phone: '',
        email: '',
        avatar: '',
        gender: '',
        status: '',
        favorite: false
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(2).max(20).required('Name is required'),
        phone: Yup.number().positive().required('Phone is required'),
        email: Yup.string().email('Invalid email.').required('Email is required'),
        avatar: Yup.string().url('Invalid URL.').required('Avatar is required'),
        gender: Yup.string().oneOf(['Male', 'Female'], 'Invalid gender').required('Gender is required'),
        status: Yup.string().oneOf(['Work', 'Family', 'Privet', 'Friends'], 'Invalid status').required('Status is required'),
        favorite: Yup.boolean()
    })

    const handleSubmit = (values, {setSubmitting} ) => {
        console.log(values)
        setSubmitting(true)
    }

    return (
        <div className="container">
            <div className="modal-content AddPage">
                <div className="modal-header">
                    <h1>Add New Contact</h1>
                </div>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <label htmlFor="name">Name</label>
                            <Field type="text" name="name" id="name"/>
                            <ErrorMessage name="name" component="p" className="text-danger"/>
                        </div>
                        <div>
                            <label htmlFor="phone">Phone</label>
                            <Field type="text" name="phone" id="phone"/>
                            <ErrorMessage name="phone" component="p" className="text-danger"/>
                        </div>                    
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email" id="email"/>
                            <ErrorMessage name="email" component="p" className="text-danger"/>
                        </div>                    
                        <div>
                            <label htmlFor="avatar">Avatar</label>
                            <Field type="text" name="avatar" id="avatar"/>
                            <ErrorMessage name="avatar" component="p" className="text-danger"/>
                        </div>                    
                        <div>
                            <label htmlFor="gender">Gender</label>
                            <Field as="select" name="gender">
                                <option value="" disabled hidden>Choose gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </Field>
                            <ErrorMessage name="gender" component="p" className="text-danger"/>
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
                            <ErrorMessage name="status" component="p" className="text-danger"/>
                        </div>                    
                        <div>
                            <label htmlFor="favorite">Favorite</label>
                            <Field type="checkbox" name="favorite" id="favorite"/>
                            <ErrorMessage name="favorite" component="p" className="text-danger"/>
                        </div>    
                        <button type="submit" disabled={isSubmitting}>Add</button>                
                    </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default NewContact