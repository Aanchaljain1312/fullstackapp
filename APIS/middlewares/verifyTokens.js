const jwt = require("jsonwebtoken")
require("dotenv").config()
//write a middleware to verify token
const verifyToken = (request,response,next)=>{
    //get bearer token
    let bearerToken= request.headers.authorization;
    //check if token exists
    if(bearerToken==undefined){
        return response.send({message:"Unauthorized request"})
    }

    if(bearerToken==null){
        return response.send({message:"Unauthorized request"})
    }

    //extract token
    let token = bearerToken.split(" ")[1]
    try{
        //verify Token
        jwt.verify(token,process.env.SECRET_KEY)
        //forward request to private route
        next()
    }catch(err){
        response.send({message:"Session expired , relogin to continue"})
    }

}
module.exports=verifyToken;