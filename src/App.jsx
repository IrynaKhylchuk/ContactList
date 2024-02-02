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
    ]
  )

  const handleNewContact = (newContact) => {
    setStore(prevStore => [...prevStore, newContact])
    console.log(store)
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<ContactList store={store}/>}/>
        <Route path='/new-contact' element={<NewContact onNewContact={handleNewContact}/>}/>
        <Route path='/update-contact' element={<UpdateContact />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </Router>
  )
}

export default App