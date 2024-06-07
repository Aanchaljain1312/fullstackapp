import React from 'react'
import "./Header.css"
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import {clearLoginStatus} from '../../slices/userSlice'

function Header() {

  //get state from store
  let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(
    (state) => state.user
  );

  //get dispatch function
  let dispatch = useDispatch();

  //get navigate function
  let navigate = useNavigate();

  //logout user
  const userLogout = () => {
    localStorage.clear();
    dispatch(clearLoginStatus());
    navigate("/login");
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoppersHub</Navbar.Brand>
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
                    <NavDropdown title={userObj.username} id="collasible-nav-dropdown" >
                      <NavDropdown.Item >
                        Change password
                      </NavDropdown.Item>

                      <NavDropdown.Divider />
                      
                      <NavDropdown.Item onClick={userLogout}>
                        Logout
                      </NavDropdown.Item>

                    </NavDropdown>
                  </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
