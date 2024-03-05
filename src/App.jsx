// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from '../src/components/navbar/Navbar';
import Footer from '../src/components/footer/Footer';
import Homemain from '../src/pages/homemain/Homemain';

import './App.css';

function App() {
 

  return (
  
       <div>
    <Navbar />
        <Homemain /> 

        <Footer/>
        </div> 
  //   // <Router>
  //   // <Navbar />

  //   // <Routes>
  //   //   <Route path="/" element={<Home />} />
  //   //   <Route path="foods" element={<Shop />} />
  //   //   <Route path="about" element={<About />} />
  //   //   <Route path="cart" element={<Cart />} />
  //   //   <Route path="contact" element={<Contact />} />
  //   //   <Route path="login" element={<Login />} />
  //   // </Routes>
  //   // <Footer />
  //   //    </Router>
   
  );
  
}

export default App;
