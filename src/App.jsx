
import './App.css'
import Form from './components/ContactsForm'
import SearchBox from './components/SearchBox'
import Contact from './components/Contact'

function App() {

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <Form />
      <SearchBox />
      <Contact />


    </div>
  )
}

export default App
