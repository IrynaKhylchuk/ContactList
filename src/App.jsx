// style
import './App.scss'

// react-router-dom
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// components
import Header from './Components/Header/Header'
import ContactList from './Components/ContactList/ContactList'
import NewContact from './Components/NewContact/NewContact'
import UpdateContact from './Components/UpdateContact/UpdateContact'
import NotFound from './Components/NotFound/NotFound'

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