//create router to handle product reqs
const express = require('express');
const exp = require('express');
const productApp = exp.Router()
const expressAsyncHandler= require('express-async-handler')


//to extract body of request object
productApp.use(exp.json()) //for post and put requests-->(exp.json) is called body parsing middleware
 
//PRODUCT API ROUTES

//get all products 
productApp.get('/getproducts',expressAsyncHandler(async(request,response)=>{
    //get productCollection object
    let productCollectionObject= request.app.get("productCollectionObject")
    //read all products
    let products = await(productCollectionObject.find().toArray()) //.find() returns cursor i.e givs data one after other to get and pack all in one toArray() is used
    //send response
    response.send({message:'all products',payload:products })
}))

//to get product by id
productApp.get('/getproduct/:id',expressAsyncHandler(async(request,response)=>{
    //get product collection object
    productCollectionObject = request.app.get("productCollectionObject");
    //get product id from url parameter
    let pid = (+request.params.id)
    //get product by id
    let product = await productCollectionObject.findOne({productId:pid})
    //if product not exists with given id
    if(product==null){
        response.send({message:'product not existed'})
    }else{
        response.send({message:'product exists',payload:product})
    }

}))


//to create product
// productApp.post('/create-product',(request,response)=>{

//     //get product Collection object
//     let productCollectionObject= request.app.get("productCollectionObject")

//     //get product object from req
//     let productObj = request.body;

//     //insert it to mongodb
//     productCollectionObject.insertOne(productObj,(err,result)=>{
//         if(err){
//             console.log("err in creating product",err);
//         }else{
//             response.send({message:'Product created successfully'})
//         }
//     })
// })


//create product using promise
// productApp.post('/create-product',(request,response)=>{

//     //get product Collection object
//     let productCollectionObject= request.app.get("productCollectionObject")

//     //get product object from req
//     let productObj = request.body;

//     //insert it to mongodb
//     productCollectionObject.insertOne(productObj)
//     .then(result=> response.send({message:'Product created successfully'}))
//     .catch(err=>console.log("err in creating product",err))
// })

//using async await
productApp.post('/create-product',expressAsyncHandler(async(request,response)=>{
    //get product Collection object
    let productCollectionObject= request.app.get("productCollectionObject")
    //get product object from req
    let productObj = request.body;
    //insert it to mongodb
    let result=await(productCollectionObject.insertOne(productObj))
    //send response
    response.send({message:'Product created successfully'})
}))

//update product

productApp.put('/update-product',expressAsyncHandler(async(request,response)=>{
    //get product collection object
    let productCollectionObject = request.app.get("productCollectionObject");
    //get modified product object from req
    let modifiedProduct = request.body;
    //update
    await productCollectionObject.updateOne({productId:modifiedProduct.productId},{$set:{...modifiedProduct}})///...spread syntax , 
    //send response
    response.send({message:'Product modified'})


}))

//delete product by id 
productApp.delete('/remove-product/:id',expressAsyncHandler(async(request,response)=>{
    //get product collection object
    let productCollectionObject = request.app.get("productCollectionObject");
    //get removalProductid
    let rid = (+request.params.id)
    //remove product
    await(productCollectionObject.deleteOne({productId:rid}))
    //send response
    response.send({message:`object with id ${rid} is deleted`});
}))
module.exports=productApp;
