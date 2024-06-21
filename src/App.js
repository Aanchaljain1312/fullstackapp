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
import Admin from './components/admin/Admin'
import {Navigate } from 'react-router-dom';
import ViewUsers from './components/view-users/ViewUsers';
import AddProducts from './components/add-products/AddProducts';
import ChartComponent from './components/ChartComponent';
import LineChart from './components/LineChart';
import ApexChart from './components/ApexChart';
import FlaskTemplateComponent from './components/FlaskComp';

function App() {
  return (
    <div className='app'>
      
      <FlaskTemplateComponent/>
      <Header />
      {/* <div style={{ maxWidth:'50%',width:'100%',backgroundColor:'#ffffff' }}>
      <LineChart/>
      </div> */}
      <div className='content' style={{marginTop:'50px'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/viewproducts" element={<ViewProducts/>}/>
          <Route path="/admin" element={<Admin/>}>
            <Route path='viewusers' element={<ViewUsers/>}/>
            <Route path='viewproducts' element={<ViewProducts/>}/>
            <Route path='addproducts' element={<AddProducts/>}/>
            {/* Navigate to view products when child path is empty */}
            <Route path="" element={<Navigate to="viewproducts" replace={true}/>}/>
          </Route>
          <Route path="/userdashboard" element={<UserDashboard/>}>
            <Route path="profile" element={<Userprofile/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="products" element={<ViewProducts/>}/>
            <Route path="chart" element={<ApexChart/>}/>
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
