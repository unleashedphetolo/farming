import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Navbar  from "./components/Navbar";
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import ProductsDetails from './Pages/ProductsDetails';
import ContactUs from "./Pages/ContactUs";
import About from "./Pages/About";
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Product:id/" element={<ProductsDetails />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
