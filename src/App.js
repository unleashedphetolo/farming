import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Navbar  from "./components/Navbar";
import Home from './Pages/Home';
import Products from './Pages/Products';
import ProductDetails from './Pages/ProductsDetails';
import ContactUs from "./Pages/ContactUs";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Product:id/" element={<ProductDetails />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
