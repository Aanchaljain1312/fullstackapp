import { useState } from 'react';
import axios from 'axios';
import { LoginContext } from './LoginContext';
function LoginStore({ children }) {
  let [userObj, setuser] = useState({});
  let [msg, setmsg] = useState(" ")
  let [err, seterr] = useState("");
  let [ls, setls] = useState(false)
  let [isSuccess,setIsSuccess] = useState(false);
  console.log(userObj)
  const logout = () => {
    localStorage.clear()
    setls(false)
    setmsg(" ")
    setIsSuccess("false");
  }
  
  const login = (userCredentialObj) => {
    axios.post("http://localhost:4000/user-api/login", userCredentialObj)
      .then(res => {
        if (res.data.message === "success") {
          //navigate to userprofile
          console.log(userCredentialObj)
          localStorage.setItem("token", res.data.payload);
          setuser({ ...res.data.userCredentialObj })
          setls(true)
          setIsSuccess(true)
          setmsg("sucessful login")
        } else if (res.data.message === "Invalid password") {
          setmsg("invalid password")
        } else {
          setmsg("invalid username")
        }
      })
      .catch((err) => {
        setIsSuccess(false);
        if (err.response) {
          seterr(err.message);
        } else if (err.request) {
          seterr(err.message);
        } else {
          seterr(err.message);
        }
      })
  }

  return (
    <LoginContext.Provider value={[userObj, login, msg, ls, logout,isSuccess]}>
      {children}
    </LoginContext.Provider>
  )
}
export default LoginStore