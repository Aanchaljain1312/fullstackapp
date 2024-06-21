import React, { useContext } from 'react'
//import "./Header.css"
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
// import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
// import { clearLoginStatus } from '../../slices/userSlice'
import  {LoginContext}  from '../../contexts/LoginContext';
import { FaUserCircle } from "react-icons/fa";
import Gt from '../Gt'
import { MdGTranslate } from "react-icons/md";
import logo from '../../images/shopping.jpeg'

function Header() {

  //get state from store
  // let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(
  //   (state) => state.user
  // );

  // // let { userObj, isLoading, isError,isSuccess, errMsg, clearLoginStatus } = useContext(LoginContext)


  // //get dispatch function
  // let dispatch = useDispatch();

  
  // //logout user
  // const userLogout = () => {
  //   localStorage.clear();
  //   dispatch(clearLoginStatus());
  //   navigate("/login");
  // }

  
  // const handleEvent = () => {
  //   navigate("/userdashboard/profile");
  // }

  
  const [currentuser, login, msg, ls, logout,isSuccess] = useContext(LoginContext);

  //get navigate function
  let navigate = useNavigate();


  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="success" fixed="top" variant="dark" mb="5" >
          <Navbar.Brand href="/">
          <img
              src={logo}
              style={{
                width:'30px',
                height:'30px',
                borderRadius:'50%'
              }}
              className="d-inline-block align-top"
              alt="ShoppersHub logo"
            />
            ShoppersHub
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {isSuccess !== true ? (
                <>
                  <Nav.Item>
                    <Nav.Link eventKey="1" as={NavLink} to="/">
                      Home
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="2" as={NavLink} to="/signup">
                      Signup
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="3" as={NavLink} to="/login">
                      Login
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="4" as={NavLink} to="/contactus">
                      ContactUs
                    </Nav.Link>
                  </Nav.Item>
                </>
              ) : (
                <>
                  {/* dropdown should appear after user login */}
                  <NavDropdown title={currentuser.username} id="collasible-nav-dropdown" >
                    <NavDropdown.Item >
                      Change password
                    </NavDropdown.Item>

                    <NavDropdown.Divider />

                    <NavDropdown.Item onClick={logout}>
                      Logout
                    </NavDropdown.Item>

                  </NavDropdown>
                  <Nav.Item>
                    <Nav.Link as={NavLink} to="userdashboard/profile">
                      <FaUserCircle className="icon-large pr-1" /> Me
                    </Nav.Link>
                  </Nav.Item>
                </>
              )}

              {/* <Dropdown>
                  <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    <MdGTranslate />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as="div">
                      <Gt />
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> */}
            </Nav>

          </Navbar.Collapse>
        <div className="dropdown">
          <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
            <MdGTranslate />
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Gt />
          </div>
        </div>
      </Navbar>
    </div>
  )
}

export default Header
