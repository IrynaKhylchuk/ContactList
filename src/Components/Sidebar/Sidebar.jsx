// scss
import "./Sidebar.scss"

// icons
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"

// hooks
import { useState } from "react"
import { useSelector } from "react-redux"

// form
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

const Sidebar = ({ categories, onNewCategory, onDeleteCategory, onEditCategory }) => {
    const contacts = useSelector(state => state.contacts)
    const [hide, setHide] = useState(false)
    const [hideEdit, setHideEdit] = useState(false)
    const [hoveredCategory, setHoveredCategory] = useState(null)

    categories.forEach(cat => {
        cat.numberOfContacts = contacts.filter((obj) => obj.category === cat.category).length
    })

    const allContacts = contacts.length
    
    const toggleHide = () => {
        setHide(!hide)
    }
    const toggleHideEdit = () => {
        setHideEdit(!hideEdit)
    }

    const initialValues = {
        category: "",
        numberOfContacts: ""
    }

    const initialValuesEdit = {
        category: ""
    }
    
    const validationSchema = Yup.object().shape({
        category: Yup.string().required("Category is required")
    })

    const deleteCategory = (category) => {
        onDeleteCategory(category)
    }
    
    const handleSubmit = (value, {resetForm}) => {
        resetForm()
        onNewCategory(value)
        setHide(false)
    }

    const handleSubmitEdit = (value, {resetForm}) => {
        resetForm()
        setHideEdit(false)
        onEditCategory(value)
    }

    return (
        <div className="sidebar">
            <ul>
                <li>All contacts <span>{allContacts}</span></li>
                <li className="category font-medium"> Category 
                    <span>
                        <button onClick={toggleHide}> 
                        <AddCircleOutlineIcon />
                        </button>
                    </span>
                </li>
                
                {categories.map((category) => (
                    <li className="position-relative" key={category.category} 
                        onMouseEnter={() => setHoveredCategory(category.category)}
                        onMouseLeave={() => setHoveredCategory(null)}
                    >
                        {category.category} 
                        <span>{category.numberOfContacts}</span>
                        {hoveredCategory === category.category && (
                            <div className="position-absolute editDelete">
                                <button onClick={toggleHideEdit}><EditIcon /></button>
                                <button onClick={() => deleteCategory(category.category)}><DeleteIcon /></button>
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
                        <Field type="text" name="category" id="category" placeholder="Category"/>
                        <ErrorMessage name="category" component="p" className="text-danger position-absolute"/>
                        <button type="submit">Add</button>
                    </Form>
                    )}
                </Formik>
            </div>

            <div style={{ display: hideEdit ? "block" : "none" }} className="position-absolute editCategory">
                <h1 className="font-medium">Edit category</h1>
                <Formik initialValues={initialValuesEdit} validationSchema={validationSchema} onSubmit={handleSubmitEdit}>
                    {() => (
                    <Form>
                        <label htmlFor="category">Category</label>
                        <Field type="text" name="category" id="categoryEdit" placeholder="Category"/>
                        <ErrorMessage name="category" component="p" className="text-danger position-absolute"/>
                        <button type="submit">Save</button>
                    </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Sidebar