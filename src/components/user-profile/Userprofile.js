import React from 'react'
import {Button ,Card,Col, Container,Row} from 'react-bootstrap';
// import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { LoginContext } from '../../contexts/LoginContext';

function Userprofile() {
  //get redux obj from redux
  // let {userObj} = useSelector(state=>state.user)

  let {userObj} = useContext(LoginContext)
  let gotImg = userObj.profileImg;

  return (
    <div style={{ backgroundColor: '#eee' , marginTop:'10px'}}>
      <Container className="py-5 ">
        <Row >
          <Col lg="4">
            <Card className="mb-4">
              <Card.Body className="text-center">
                <Card.Img
                  src={!gotImg?"https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=600" : gotImg }
                  alt="aavtar"
                  className="rounded-circle"
                  style={{ width: '200px', height:'200px'}}
                  fluid />
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="8">
            <Card className="mb-4">
              <Card.Body>
                <Row>
                  <Col sm="3">
                    <Card.Text>Full Name</Card.Text>
                  </Col>
                  <Col sm="9">
                    <Card.Text className="text-muted">Johnatan Smith</Card.Text>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm="3">
                    <Card.Text>Email</Card.Text>
                  </Col>
                  <Col sm="9">
                    <Card.Text className="text-muted">example@example.com</Card.Text>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm="3">
                    <Card.Text>Phone</Card.Text>
                  </Col>
                  <Col sm="9">
                    <Card.Text className="text-muted">(097) 234-5678</Card.Text>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm="3">
                    <Card.Text>Mobile</Card.Text>
                  </Col>
                  <Col sm="9">
                    <Card.Text className="text-muted">(098) 765-4321</Card.Text>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm="3">
                    <Card.Text>Address</Card.Text>
                  </Col>
                  <Col sm="9">
                    <Card.Text className="text-muted">Bay Area, San Francisco, CA</Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            </Col>
        </Row>
      </Container>
      {/* <div>
      <SideBar />
      <Card style={{ width: '18rem' }} className='mx-auto mt-5'>
      <Card.Img variant="top" src={userObj.profileImg} />
      <Card.Body>
        <Card.Title>{userObj.username}</Card.Title>
        <Card.Text>
          {userObj.email}
        </Card.Text>
        <Card.Text>
          {userObj.city}
        </Card.Text>
        <Button variant="primary">Edit</Button>
      </Card.Body>
    </Card>
    </div> */}
    </div>
  )
}

export default Userprofile
