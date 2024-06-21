//create router to handle user api reqs
const exp = require('express');
const userApp = exp.Router()
const expressAsyncHandler = require('express-async-handler')

//import bcryptjs to hash password
const bcryptjs = require('bcryptjs')
//import json webtoken
const jwt = require('jsonwebtoken')
const verifyToken = require('./middlewares/verifyTokens')
require("dotenv").config();
const upload = require('./middlewares/Cloudinary');

//to extract body of request object
userApp.use(exp.json()) //for post and put requsets-->(exp.json) is called body parsinf middleware

//create rest api

//USER API ROUTES


//create route to handle '/getusers' path
//only for admin
userApp.get('/getusers',expressAsyncHandler(async(request,response)=>{
    //get user collection object
    let userCollectionObject = request.app.get("userCollectionObject");
    //get all users and pack into an array
    let users = await userCollectionObject.find().toArray();
    //send response
    response.send({message:"All users", payload:users})

}))


//create route to user login
userApp.post('/login',expressAsyncHandler(async(request,response)=>{
    //get user collection object
    let userCollectionObject = request.app.get("userCollectionObject");
    //get user credentials from client
    let userCredObj = request.body
    //check if the username and password are correcta
    let userOfDB = await userCollectionObject.findOne({username:userCredObj.username})
    //if usernane not existed
    if(userOfDB==null){
        response.send({message:"Invalid user"});
    }else{
        //compare the passwords
        let status = await bcryptjs.compare(userCredObj.password,userOfDB.password)
        //if passwords not matched
        if(status == false){
            response.send({message:"Invalid password"})
        }else{
            //create token
            //SEcret key in single quote
            let token = jwt.sign(
                {username:userOfDB.username}, 
                process.env.SECRET_KEY,
                {expiresIn:60}
            )
            //send token
            response.send({message:"success", payload:token,userObj:userOfDB})
        }
    }
}))



//route to create user
userApp.post(
    "/create-user",
    upload.single("photo"),
    expressAsyncHandler(async(request,response)=>{
    //get link from cloudinary
    //console.log(request.file.path)
    //get user collection object
    let userCollectionObject = request.app.get("userCollectionObject");
    //get user obj from client...now instead of request.body put json.parse..its converted to string convert it back to object 
    let newUserObj = JSON.parse(request.body.userObj);
    //check for user existance by username
    let userOfDB = await userCollectionObject.findOne({username:newUserObj.username})
    if(userOfDB!=null){
        response.send({message:"Username is already taken , please choose another "})
    }else{
        //hash the password
        let hashedPassword = await bcryptjs.hash(newUserObj.password,5);
        //replace plain text password with hashed password
        newUserObj.password = hashedPassword;
        //add profile image link to new Userobj
        newUserObj.profileImg = request.file.path;
        //remove photo property
        delete newUserObj.photo;
        //insert new user
        await(userCollectionObject.insertOne(newUserObj));
        //send response
        response.send({message:"New user created"})
    }
}))

//private route for testing
userApp.get('/test',verifyToken,(request,response)=>{
    response.send({message:"This reply is from private route"});
})

//route to modify userdata
userApp.put('/update-user',(request,response)=>{
    
})



userApp.delete('/remove-user',(request,response)=>{

})

module.exports=userApp;