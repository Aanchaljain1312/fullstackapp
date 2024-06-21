import React ,{useState} from 'react'
import './UserDashboard.css'
import { Nav } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Outlet, NavLink } from 'react-router-dom';
import SideBar from '../side-bar/SideBar';

function UserDashboard() {
  let { userObj } = useSelector(state => state.user)
  let gotImg = userObj.profileImg;

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (

    <>
      {/* <div className="container" style={{ marginLeft: '250px' }}>

      </div> */}
      {/* <Nav className='justify-content-center mt-3' defaultActiveKey="/profile">
          <Nav.Item>
            <Nav.Link as={NavLink} to="profile" >
              UserProfile
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="cart" >
              Cart
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="products">
              Products
            </Nav.Link>
          </Nav.Item>
        </Nav> */}
      
      
      <img
        src={!gotImg?"https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=600" : gotImg }
        className="float-end m-3 profile-pic"
        alt=""
      />
      <SideBar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar}/>
      <div style={{ marginLeft: isSidebarCollapsed ? "65px" : "240px" }}>
        <Outlet />
      </div>
    </>
  )
}

export default UserDashboard
