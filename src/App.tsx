import { Routes, Route } from 'react-router-dom'
import './App.css'
import { NavBarComponent } from './components/navigation/NavBarComponent'
import { HomePage } from './pages/HomePage'
import { FooterComponent } from './components/footer/FooterComponent'
import { UsPage } from './pages/UsPage'
import { MortgagePage } from './pages/MortgagePage'
import { ContactPage } from './pages/ContactPage'
import { ContactContainerComponent } from './components/contact/ContactContainerComponent'

function App() {

  return (
    <div>
      <NavBarComponent />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/us' element={ <UsPage /> } />
        <Route path='/mortgage' element={ <MortgagePage /> } />
        <Route path='/contact' element={ <ContactPage /> } />        
      </Routes>
      <ContactContainerComponent />
      <FooterComponent />
    </div>
  )
}

export default App
