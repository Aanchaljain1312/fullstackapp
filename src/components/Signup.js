import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let [img,setImg] = useState(null)

  const onImageSelect = (event) =>{
    setImg(event.target.files[0]);
    //setFile(event.target.files[0])
    //event object has a property called target
    // console.log(event.target.files[0])
    console.log(event);
  }

  const navigate = useNavigate()

  const onFormSubmit = (userObj) => {
    //create form data object
    let formData = new FormData();

    //append values to it
    formData.append("userObj" , JSON.stringify(userObj))
    formData.append("photo",img)


    //make http post req
    axios.post('http://localhost:4000/user-api/create-user', formData)
      .then((response) => {
        alert(response.data.message)
        //navigate to login
        if (response.data.message === "New user created") {
          navigate("/login")
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong in creating the user")
      })
  }



  return (
    <>
      <div className='display-2 text-center text-info'>Sign Up</div>
      <Form className='w-50 mx-auto' onSubmit={handleSubmit(onFormSubmit)}>
        {/*username*/}
        <Form.Group className='mb-3'>
          <Form.Label>UserName</Form.Label>
          <Form.Control type="text" placeholder="Enter username" {...register("username", { required: true })} />
          {/* validation error message for user name */}
          {errors.username && <p className='text-danger'>Username is required</p>}
        </Form.Group>

        {/*password*/}
        <Form.Group className='mb-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder='Enter password' {...register("password", { required: true })} />
          {/* validation error message for password */}
          {errors.password && <p className='text-danger'>password is required</p>}
        </Form.Group>

        {/* email */}
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" {...register("email", { required: true })} />
          {/* validation error message for email */}
          {errors.email && <p className='text-danger'>email is required</p>}
        </Form.Group>

        {/* city */}
        <Form.Group className="mb-3">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Enter city" {...register("city", { required: true })} />
          {/* validation error message for city */}
          {errors.city && <p className='text-danger'>city is required</p>}
        </Form.Group>

        {/* profile image */}
        <Form.Group className="mb-3">
          <Form.Label>Select image</Form.Label>
          <Form.Control
            type="file"
            {...register("photo", { required: true })}
            onChange={(event) => onImageSelect(event)}
          />
          {/* validation error message for password */}
          {errors.photo && (
            <p className="text-danger">* Profile image is required</p>
          )}
        </Form.Group>

        <Button className="primary" type="submit">
          Signup
        </Button>

      </Form>
    </>
  )
}


export default Signup
