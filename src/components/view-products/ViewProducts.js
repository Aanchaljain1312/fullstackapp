import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { Card,Row,Col,Button } from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";
// import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { LoginContext } from '../../contexts/LoginContext';

function ViewProducts() {
  const [products, setProducts] = useState([]);
  
  // let { userObj } = useSelector(state => state.user)
  let {userObj} = useContext(LoginContext)

  const getProducts = async () => {
    try {
      let response = await axios.get("/product-api/getproducts")
      setProducts(response.data.payload);
      //console.log(response.data.payload);
    } catch (err) {
      console.log("Error fetching users :", err)
    }
  }

  const addToCart = async (product) => {
    try {
      let response = await axios.post("/cart-api/add-to-cart", {
        username: userObj.username,
        imageUrl:product.imageUrl,
        productId: product.productId,
        productName: product.productName,
        brand:product.brand,
        price: product.price,
        quantity:1
      });
      alert("Product added to cart successfully!");
      alert(response.data.message);
    } catch (err) {
      console.log("Error adding product to cart:", err);
    }
  };

  useEffect(() => { getProducts() }, [])

  return (
    <div>
      {products && products.length>0 ?(
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
                        <strong>Product Brand:</strong> {product.brand}
                        </Card.Text>
                        <Card.Text>
                        <strong>Product Price:</strong> {product.price}
                        </Card.Text>
                        <Button variant="warning" onClick={() => addToCart(product)}>Add to Cart<FaShoppingCart /></Button>
                    </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
        ): (
            <p>No users found</p>
        )}
        </div>
)}
export default ViewProducts
