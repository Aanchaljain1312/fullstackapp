import React from 'react'
import {Button ,Card} from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Userprofile() {
  //get redux obj from redux
  let {userObj} = useSelector(state=>state.user)
  return (
    <div>
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
    </div>
  )
}

export default Userprofile
