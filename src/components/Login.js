import React from 'react'
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import login from '../images/login.svg'
import { useSelector, useDispatch } from 'react-redux'
import { userLogin } from '../slices/userSlice'
import { useEffect } from 'react';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(state => state.user)
  let dispatch = useDispatch();
  const navigate = useNavigate()

  const onFormSubmit = (userCredentialObj) => {
    //console.log(userCredentialObj)
    if (userCredentialObj.userType === "user") {
      dispatch(userLogin(userCredentialObj));
    }

    if (userCredentialObj.userType === "admin") {
      navigate("/admin")
    }
  }

  useEffect(() => {
    if (isSuccess) {
      navigate("/userdashboard");
    }
  }, [isSuccess, isError]);

  return (
    <div className='container'>

      <p className='display-2 text-center text-primary'>Login</p>
      <img
        src={login}
        width="300px"
        className='d-none d-sm-block mx-auto mt-2'
        alt="no image"
      />

      <div className='row'></div>
      <div className="col-12 col-sm-8 col-md-6  mx-auto">
        <Form onSubmit={handleSubmit(onFormSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Select type of User</Form.Label> <br />
            {/* user type */}
            <Form.Check inline type="radio" id="user">
              <Form.Check.Input
                type="radio"
                value="user"
                {...register("userType", { required: true })}
              />
              <Form.Check.Label>User</Form.Check.Label>
            </Form.Check>
            <Form.Check inline type="radio" id="admin">
              <Form.Check.Input
                type="radio"
                value="admin"
                {...register("userType", { required: true })}
              />
              <Form.Check.Label>Admin</Form.Check.Label>
            </Form.Check>
          </Form.Group>

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

          <Button className="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Login

// import React from 'react';
// import './Login.css';

// const Login = () => {
//   return (
//     <body className="bg-success">
//       <div className="main">
//         <table className="parent">
//           <tbody>
//             <tr>
//               <td className="child1">
//                 <h1><b>Login</b></h1>
//                 <label htmlFor="username"></label>
//                 <input type="text" id="username" name="username" placeholder="Username required" autoComplete="on" />
//                 <input type="number" name="number" id="number" placeholder="Phone Number" />
//                 <button>
//                   <a href="./buyer.html">Buyer</a>
//                 </button>
//                 <button>
//                   <a href="./seller.html">Seller</a>
//                 </button>
//               </td>
//               <td className="child2 p-4">
//                 <h1><b>Buyer-Seller Platform</b><br /><b>Form</b></h1>
//                 <p>Buyer Seller Platform is to connect farmers with the buyers (FPOs, Exporters, Traders, and Processors). Buyer registers on this platform and chooses the area from where he wants to buy the product. He can offer the price at which he wants to buy the product. Farmers of that selected location get the SMS on their mobile set. SMS contains name and mobile number of all buyers and the price which they are offering to buy a commodity.</p>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </body>
//   );
// };

// export default Login;

