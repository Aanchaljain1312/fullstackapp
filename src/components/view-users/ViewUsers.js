import React from 'react'
import axios from 'axios'
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';


function ViewUsers() {
    let token = localStorage.getItem("token");
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            let response = await axios.get('/user-api/getusers', {
                headers: { Authorization: "Bearer " + token }
            });
            let users = response.data.payload;
            console.log(users);
            setUsers(users);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <Container>
            <h2 className="my-4">Users</h2>
            {users && users.length > 0 ? (
                <Row className="mb-4">
                {users.map(user => (
                    <Col key={user.id} className='mb-2'>
                        <Card style={{ width: '18rem' }} className='mx-auto mt-5'>
                            <Card.Img variant="top" style={{ height: '200px', objectFit: 'cover' }} src={user.profileImg} />
                            <Card.Body>
                                <Card.Title>{user.username}</Card.Title>
                                <Card.Text>
                                    {user.email}
                                </Card.Text>
                                <Card.Text>
                                    {user.city}
                                </Card.Text>
                                {/* <Button variant="primary">Edit</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    ))}
                </Row>)
                : (
                    <p>No users found</p>
                )}
        </Container>
    );
}

export default ViewUsers;