import './App.css';
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import UserDashboard from './components/userdashboard/UserDashboard'
import Userprofile from './components/user-profile/Userprofile'
import Cart from './components/cart/Cart'
import ViewProducts from './components/view-products/ViewProducts'
import {Navigate } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/userdashboard" element={<UserDashboard/>}>
            <Route path="profile" element={<Userprofile/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="products" element={<ViewProducts/>}/>
            {/* Navigate to profile when child path is empty */}
            <Route path="" element={<Navigate to="profile" replace={true}/>}/>
          </Route>
        </Routes>
      </div>
      <div className='mt-3'>
        <Footer />
      </div>
    </div>
  );
}
export default App;
