// scss
import "./Sidebar.scss"

// icons
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"

// hooks
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"

// form
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

// id
import { v4 as uuidv4 } from "uuid"

// actions
import {
    addCategory, deleteCategory, updateCategory, filterContactsByCategory
} from "../../redux/actions"

const Sidebar = () => {
    const [hide, setHide] = useState(false)
    const [hideEdit, setHideEdit] = useState(false)
    const [hoveredCategory, setHoveredCategory] = useState(null)
    const [{ id, category }, setInitialValues] = useState({ id: "", category: "" })
    const contacts = useSelector(state => state.contacts)
    const categories = useSelector(state => state.categories)
    const dispatch = useDispatch()

    const allContacts = contacts.length

    const filteredContactsArr = (categoryId) => {
        dispatch(filterContactsByCategory(categoryId))
    }

    const initialValues = {
        id: "",
        category: ""
    }

    const validationSchema = Yup.object().shape({
        category: Yup.string().required("Category is required")
    })

    const handleSubmit = (values, { resetForm }) => {
        values.id = uuidv4()
        values.contacts = []
        let categoryName = categories.map(category => category.category.toLowerCase())

        if (categoryName.indexOf(values.category.toLowerCase()) !== -1) {
            alert("This category already exists")
        } else
            dispatch(addCategory(values))
        resetForm()
        setHide(false)
    }

    const handleSubmitEdit = (values, { resetForm }) => {
        dispatch(updateCategory(values))
        resetForm()
        setHideEdit(false)
    }

    const toggleHide = () => {
        setHide(!hide)
    }

    const toggleHideEdit = (category) => {
        setInitialValues(category)
        setHideEdit(!hideEdit)
    }

    let initialValuesEdit = {
        id: id,
        category: category
    }

    const handleDeleteCategory = (id) => {
        dispatch(deleteCategory(id))
    }
    return (
        <div className="sidebar">
            <ul>
                <li onClick={() => dispatch(filterContactsByCategory())}>All contacts <span>{allContacts}</span></li>
                <li className="category font-medium"> Category
                    <span>
                        <button onClick={toggleHide}>
                            <AddCircleOutlineIcon />
                        </button>
                    </span>
                </li>

                {categories.map((category) => (
                    <li key={category.id}
                        onMouseEnter={() => setHoveredCategory(category.id)}
                        onMouseLeave={() => setHoveredCategory(null)}
                        onClick={() => filteredContactsArr(category.id)}
                    >
                        {category.category}
                        <span>{category.contacts.length}</span>
                        {hoveredCategory === category.id && (
                            <div className="editDelete">
                                <button onClick={() => {
                                    toggleHideEdit(category)
                                }}><EditIcon /></button>
                                <button onClick={() => handleDeleteCategory(category.id)}><DeleteIcon /></button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>

            <div style={{ display: hide ? "block" : "none" }} className="position-absolute addCategory">
                <h1 className="font-medium">Add new category</h1>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {() => (
                        <Form>
                            <label htmlFor="category">Category</label>
                            <Field type="text" name="category" id="category" placeholder="Category" />
                            <ErrorMessage name="category" component="p" className="text-danger position-absolute" />
                            <button type="submit">Add</button>
                        </Form>
                    )}
                </Formik>
            </div>

            <div style={{ display: hideEdit ? "block" : "none" }} className="position-absolute editCategory">
                <h1 className="font-medium">Edit category</h1>
                <Formik
                    initialValues={initialValuesEdit}
                    enableReinitialize
                    validationSchema={validationSchema}
                    onSubmit={handleSubmitEdit}>
                    {() => (
                        <Form>
                            <label htmlFor="category">Category</label>
                            <Field type="text" name="category" id="categoryEdit" placeholder="Category" />
                            <ErrorMessage name="category" component="p" className="text-danger position-absolute" />
                            <button type="submit">Save</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Sidebar