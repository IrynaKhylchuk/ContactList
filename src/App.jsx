// style
import './App.scss'

// react-router-dom
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// components
import Header from './Components/Header/Header'
import ContactList from './pages/ContactList/ContactList'
import NewContact from './pages/NewContact/NewContact'
import UpdateContact from './pages/UpdateContact/UpdateContact'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<ContactList />}/>
        <Route path='/new-contact' element={<NewContact />}/>
        <Route path='/update-contact' element={<UpdateContact />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </Router>
  )
}

export default App