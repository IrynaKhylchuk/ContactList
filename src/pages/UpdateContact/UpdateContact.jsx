// scss
import "./UpdateContact.scss"

// form
import { Formik, Form, Field, ErrorMessage } from "formik"
import { validationSchema } from "../../assets/validation/validation"

// hooks
import { useNavigate, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { updateContact, filterContactsByCategory } from "../../redux/actions"

const UpdateContact = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const categories = useSelector(state => state.categories)
    const contacts = useSelector(state => state.contacts)

    let contact = contacts.find(contact => contact.id === id)

    const initialValues = {
        id: contact.id,
        name: contact.name,
        phone: contact.phone,
        email: contact.email,
        avatar: contact.avatar,
        gender: contact.gender,
        categoryId: contact.categoryId,
        favorite: contact.favorite
    }

    const handleSubmit = (values) => {
        if (contact !== values) {
            dispatch(updateContact(values))
            dispatch(filterContactsByCategory())
        }

        navigate("/")
    }

    return (
        <div className="container app-background">
            <div className="AddPage">
                <div>
                    <h1 className="font-medium">Edit Contact</h1>
                </div>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {() => (
                        <Form>
                            <div className="row">
                                <div className="col-6">
                                    <label htmlFor="name">Name</label>
                                    <Field type="text" name="name" id="name" placeholder="John Doe" />
                                    <ErrorMessage name="name" component="p" className="text-danger position-absolute" />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="phone">Phone</label>
                                    <Field type="text" name="phone" id="phone" placeholder="+380123456789" />
                                    <ErrorMessage name="phone" component="p" className="text-danger position-absolute" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <label htmlFor="email">Email</label>
                                    <Field type="email" name="email" id="email" placeholder="johndoe@mail.com" />
                                    <ErrorMessage name="email" component="p" className="text-danger position-absolute" />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="avatar">Avatar</label>
                                    <Field type="number" name="avatar" id="avatar" placeholder="0-99" />
                                    <ErrorMessage name="avatar" component="p" className="text-danger position-absolute" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="gender">Gender</label>
                                <Field as="select" name="gender">
                                    <option value="" disabled hidden>Choose gender</option>
                                    <option value="Men">Men</option>
                                    <option value="Women">Women</option>
                                </Field>
                                <ErrorMessage name="gender" component="p" className="text-danger position-absolute" />
                            </div>
                            <div>
                                <label htmlFor="categoryId">Category</label>
                                <Field as="select" name="categoryId" id="categoryId">
                                    <option value="" disabled hidden>Choose category</option>
                                    {categories.map((category) => (
                                        <option key={category.id} value={category.id}>
                                            {category.category}
                                        </option>
                                    ))}
                                </Field>
                                <ErrorMessage name="categoryId" component="p" className="text-danger position-absolute" />
                            </div>
                            <div>
                                <label htmlFor="favorite">Favorite</label>
                                <Field type="checkbox" name="favorite" id="favorite" />
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