import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'

import CounterPage from './pages/CounterPage'
import CrudPage from './pages/CrudPage'

function App() {

  return (
    <>

    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<CrudPage />} />
      <Route path='/counter' element={<CounterPage />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
