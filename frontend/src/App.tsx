import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/home';
import Details from '../src/pages/details';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games/:id" element={<Details/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
