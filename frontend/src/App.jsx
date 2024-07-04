import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import CarPark from './components/CarPark'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/adminlogin' element= {<Login/>}></Route>
      <Route path='/dashboard' element= {<Dashboard/>}></Route>
      <Route path='/carpark' element= {<CarPark/>}></Route>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
