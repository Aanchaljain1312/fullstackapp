import axios from 'axios'
import React from 'react'

function Cart() {
  //get token from local storage
  let token = localStorage.getItem("token");
  const getTestData=async()=>{
    let response = await axios.get('/user-api/test',{
      headers:{ Authorization: "Bearer " + token }
    });
    let message = response.data.message;
    alert(message)
  }

  const getUsers =async()=>{
    let response = await axios.get('/user-api/getusers',{
      headers:{ Authorization: "Bearer " + token }
    });
    let users = response.data.payload;
    console.log(users)
  }
  return (
    <div>
      {/* make request to private route 'test */}
      <button className="btn btn-warning d-block mx-auto" onClick={getTestData}>
        Get data from private route
      </button>

      <button className="btn btn-danger d-block mx-auto" onClick={getUsers}>
        Get users data
      </button>
    </div>
  )
}

export default Cart
