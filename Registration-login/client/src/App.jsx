import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Home from './Components/Home'
import ForgotPassword from './Components/ForgotPassword'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path='/forgotPassword' element={<ForgotPassword/>}></Route>
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
