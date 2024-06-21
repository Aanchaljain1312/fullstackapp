import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux';
import { Card, Button, Col, Row } from 'react-bootstrap';
import { useContext } from 'react';
import { LoginContext } from '../../contexts/LoginContext';

//get token from local storage
// let token = localStorage.getItem("token");
// const getTestData=async()=>{
//   let response = await axios.get('/user-api/test',{
//     headers:{ Authorization: "Bearer " + token }
//   });
//   let message = response.data.message;
//   alert(message)
// }

// const getUsers =async()=>{
//   let response = await axios.get('/user-api/getusers',{
//     headers:{ Authorization: "Bearer " + token }
//   });
//   let users = response.data.payload;
//   console.log(users)
// }
// return (
//   <div>
//     {/* make request to private route 'test */}
//     <button className="btn btn-warning d-block mx-auto" onClick={getTestData}>
//       Get data from private route
//     </button>

//     <button className="btn btn-danger d-block mx-auto" onClick={getUsers}>
//       Get users data
//     </button>
//   </div>
//)

function Cart() {
  const [products, setCartProducts] = useState([]);
  // let { userObj } = useSelector(state => state.user)
  let {userObj} = useContext(LoginContext);

  let username = userObj.username;
  console.log(username)
  const getCart = async () => {
    try {
      let response = await axios.get(`/cart-api/get-cart/${username}`)
      console.log(response.data.payload.products)
      setCartProducts(response.data.payload.products)
      // console.log("Normal response",response.data)
      console.log("Products response", products);
    } catch (err) {
      console.log("Error fetching cart :", err)
    }
  }
  useEffect(() => {getCart()}, [])

  return (
    <div >
      {products && products.length > 0 ? (
        <Row className="mb-4">
          {products.map(product => (
            <Col key={product.id} className='mb-2'>
              <Card style={{ width: '18rem' }} className='mx-auto mt-5'>
                <Card.Img variant="top" style={{ height: '200px', objectFit: 'cover' }} src={product.imageUrl} />
                <Card.Body>
                  <Card.Title><strong>Product :</strong> {product.productName}</Card.Title>
                  <Card.Text>
                    <strong>Product ID:</strong> {product.productId}
                  </Card.Text>
                  <Card.Text>
                    <strong>Product Brand:</strong> {product.Brand}
                  </Card.Text>
                  <Card.Text>
                    <strong>Product Price:</strong> {product.price}
                  </Card.Text>
                  <Button variant="danger">Remove </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p>Cart is Empty</p>
      )}
    </div>
  )
}

export default Cart
