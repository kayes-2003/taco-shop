import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Hours from "./components/Hours";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Order from "./components/Order";
import logo
import "./style.css";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<><Hero /> <Menu /></>} />
        <Route path="/order" element={<Order />} />
        <Route path="/hours" element={<Hours />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;