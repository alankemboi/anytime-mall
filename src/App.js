import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './pages/Store';
import Navbar from './components/Navbar';
import About from './pages/About';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/anytime-mall" element={<Store />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
