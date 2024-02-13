// scss
import './Sidebar.scss'

// icons
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

// hooks
import { useState } from "react"

// form
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

// redux
import { useSelector } from 'react-redux'

const Sidebar = ({ categories, onNewCategory, onDeleteCategory, onEditCategory }) => {
    const contacts = useSelector(state => state.contacts)

    //#region visible
    const [hide, setHide] = useState(false)
    const [hideEdit, setHideEdit] = useState(false)

    const toggleHide = () => {
        setHide(!hide)
    }
    const toggleHideEdit = () => {
        setHideEdit(!hideEdit)
    }
    //#endregion

    //#region counter
    categories.forEach(cat => {
        cat.numberOfContacts = contacts.filter((obj) => obj.category === cat.category).length
    })

    const allContacts = contacts.length
    //#endregion

    //#region form settings
    const initialValues = {
        category: '',
        numberOfContacts: 0
    }

    const handleSubmit = (value, action) => {
        action.resetForm({
            value: {
              category: ''
            }})

        onNewCategory(value)
        setHide(false)
    }

    const validationSchema = Yup.object().shape({
        category: Yup.string().required('Category is required')
    })
    //#endregion

    //#region delete category
    const deleteCategory = (category) => {
        onDeleteCategory(category)
    }
    //#endregion
    
    //#region hover 
    const [hoveredCategory, setHoveredCategory] = useState(null)
    //#endregion
    
    //# edit category
    const handleSubmitEdit = (value, action) => {
        action.resetForm({
            value: {
              category: ''
            }})

        setHideEdit(false)
        onEditCategory(value)
        console.log(value)
    }

    return (
        <div className="sidebar">
            <ul>
                <li>All contacts <span>{allContacts}</span></li>
                <li className='category font-medium'> Category 
                    <span>
                        <button className='addBtn' onClick={toggleHide}> 
                        <AddCircleOutlineIcon />
                        </button>
                    </span>
                </li>
                
                {categories.map((category) => (
                    <li className='position-relative' key={category.category} 
                        onMouseEnter={() => setHoveredCategory(category.category)}
                        onMouseLeave={() => setHoveredCategory(null)}
                    >
                        {category.category} 
                        <span>{category.numberOfContacts}</span>
                        {hoveredCategory === category.category && (
                            <div className='position-absolute editDelete'>
                                <button onClick={toggleHideEdit}><EditIcon /></button>
                                <button onClick={() => deleteCategory(category.category)}><DeleteIcon /></button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>

            <div style={{ display: hide ? "block" : "none" }} className='position-absolute addCategory'>
                <h1 className='font-medium'>Add new category</h1>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <label htmlFor="category">Category</label>
                            <Field type="text" name="category" id="category" placeholder="Category"/>
                            <ErrorMessage name="category" component="p" className="text-danger position-absolute"/>
                        </div>    
                        <button type="submit">Add</button>
                    </Form>
                    )}
                </Formik>
            </div>

            <div style={{ display: hideEdit ? "block" : "none" }} className='position-absolute editCategory'>
                <h1 className='font-medium'>Edit category</h1>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmitEdit}>
                    {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <label htmlFor="category">Category</label>
                            <Field type="text" name="category" id="categoryEdit" placeholder="Category"/>
                            <ErrorMessage name="category" component="p" className="text-danger position-absolute"/>
                        </div>    
                        <button type="submit">Save</button>
                    </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Sidebar