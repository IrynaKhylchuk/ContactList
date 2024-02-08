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

function App() {
  const [store, setStore] = useState(
    [
      {
        id: 'cb1f89af-e866-4ca7-9118-e9e74c2dc0e2',
        name: 'John',
        phone: '1234567890',
        email: 'johnDoe@mail.com',
        avatar: 45,
        gender: 'Men',
        status: 'Work',
        favorite: true
      },
      {
        id: 'cb1f89af-e866-4ca7-9118-e9e74c2dc0e3',
        name: 'Jane',
        phone: '1234567890',
        email: 'janeDoe@mail.com',
        avatar: 55,
        gender: 'Women',
        status: 'Friends',
        favorite: true
      }
    ]
  )

  const handleNewContact = (newContact) => {
    setStore(prevStore => [...prevStore, newContact])
  }

  const deleteContact = (id) => {
    setStore(prevStore => prevStore.filter(contact => contact.id !== id))
  }

  let currentUserId

  const setUserId = (id) => {
    currentUserId = id
  }

  const getUserId = () => {
    return currentUserId
  }

  const onSave = (values) => {
    const editContact = {
        id: values.id,
        name: values.name,
        phone: values.phone,
        email: values.email,
        avatar: values.avatar,
        gender: values.gender,
        status: values.status,
        favorite: values.favorite
      }
    console.log(editContact)

    setStore(prevStore => prevStore.filter(contact => contact.id !== values.id))
    setStore(prevStore => [...prevStore, editContact])
    console.log(values.id)
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<ContactList store={store} onDeleteContact={deleteContact} onEditContact={setUserId}/>}/>
        <Route path='/new-contact' element={<NewContact onNewContact={handleNewContact}/>}/>
        <Route path='/update-contact' element={<UpdateContact store={store} getUserId={getUserId} onSave={onSave}/>} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </Router>
  )
}

export default App