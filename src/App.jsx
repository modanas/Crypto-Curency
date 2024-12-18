import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home/Home.jsx";
import Coin from "./pages/Coin/Coin.jsx";

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coin/:id' element={<Coin />} />
      </Routes>
    </div>
  )
}

export default App
