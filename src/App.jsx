// scss
import './App.scss'

// react-router-dom
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// components
import Header from './Components/Header/Header'
import ContactList from './pages/ContactList/ContactList'
import NewContact from './pages/NewContact/NewContact'
import UpdateContact from './pages/UpdateContact/UpdateContact'
import NotFound from './pages/NotFound/NotFound'

// hooks
import { useState } from "react"

// redux
import { Provider } from 'react-redux'
import store from './store'

function App() {
  const [categories, setCategories] = useState(
    [
      {
        category: 'Other',
        numberOfContacts: 0
      }
    ]
  )

  const handelNewCategory = (newCategory) => {
    setCategories(prevCategories => [...prevCategories, newCategory])
  }

  const handleDeleteCategory = (category) => {
    setCategories(prevCategories => prevCategories.filter(cat => cat.category !== category))
  }

  const handleUpdateCategory = (updatedCategory) => {
    console.log('updatedCategory')
  }

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<ContactList categories={categories} 
          onNewCategory={handelNewCategory} onDeleteCategory={handleDeleteCategory} onEditCategory={handleUpdateCategory}/>}/>
          <Route path='/new-contact' element={<NewContact categories={categories}/>}/>
          <Route path='/update-contact/:id' element={<UpdateContact categories={categories}/>} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </Router>
    </Provider>
  )
}

export default App