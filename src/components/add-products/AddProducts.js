import React from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Form ,Button} from 'react-bootstrap';

function AddProducts() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onFormSubmit =(prodObj)=>{

        axios.post('http://localhost:4000/product-api/create-product',prodObj)
        .then((response) => {
            alert(response.data.message)
          })
          .catch((error) => {
            console.log(error);
            alert("Something went wrong in creating the product")
          })
      }

    
  return (
    <div>
      <div className='display-2 text-center text-info'>Add Product</div>
      <Form className='w-50 mx-auto' onSubmit={handleSubmit(onFormSubmit)}>
        {/*product id*/}
        <Form.Group className='mb-3'>
          <Form.Label>ProductId</Form.Label>
          <Form.Control type="text" placeholder="Enter product Id" {...register("productId", { required: true })} />
          {/* validation error message for user name */}
          {errors.productId && <p className='text-danger'>ProductId is required</p>}
        </Form.Group>

        {/*product name*/}
        <Form.Group className='mb-3'>
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder='Enter product name' {...register("productName", { required: true })} />
          {/* validation error message for password */}
          {errors.productName && <p className='text-danger'>Product name is required</p>}
        </Form.Group>

        {/* brand */}
        <Form.Group className="mb-3">
          <Form.Label>Brand</Form.Label>
          <Form.Control type="text" placeholder="Enter Brand" {...register("brand", { required: true })} />
          {/* validation error message for city */}
          {errors.brand && <p className='text-danger'>brand is required</p>}
        </Form.Group>

        {/* price */}
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Enter Price" {...register("price", { required: true })} />
          {/* validation error message for city */}
          {errors.price && <p className='text-danger'>price is required</p>}
        </Form.Group>

        {/* Product image */}
        <Form.Group className="mb-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter image URL"
            {...register("imageUrl", { required: true })}
          />
          {errors.imageUrl && (
            <p className="text-danger">Image URL is required</p>
          )}
        </Form.Group>

        <Button className="primary" type="submit">
          Add Product
        </Button>

      </Form>
    </div>
  )
}

export default AddProducts

