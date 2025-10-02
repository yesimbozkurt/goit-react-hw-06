
import './App.css'
import Form from './components/ContactsForm'
import SearchBox from './components/SearchBox'
import ContactsList from './components/ContactsList'

function App() {

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <SearchBox />
      <Form />
      <ContactsList />
    </div>
  )
}

export default App
