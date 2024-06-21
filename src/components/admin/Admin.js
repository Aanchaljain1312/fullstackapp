import React from 'react'
import { Nav } from 'react-bootstrap'
import {NavLink,Outlet } from 'react-router-dom'

function Admin() {
  return (
    <div>
      <>
        <Nav className='justify-content-center mt-3' defaultActiveKey="viewproducts">
          <Nav.Item>
            <Nav.Link to="viewusers" as={NavLink}>
              ViewUsers
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="viewproducts" as={NavLink}>
              View all Products
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="addproducts" as={NavLink}>
              Add products
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="mt-3">
          <Outlet />
        </div>
      </>
    </div>
  )
}

export default Admin
