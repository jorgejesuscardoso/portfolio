import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import LayOut from './components/layout/LayOut'


function App() {

  return (
    <Routes>
      <Route  element={<LayOut />} >
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
