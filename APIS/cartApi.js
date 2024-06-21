//create router to handle cart api request
const exp = require('express');
const cartApp = exp.Router()
const expressAsyncHandler = require('express-async-handler')

//to extract body of request object
cartApp.use(exp.json()) //for post and put requests-->(exp.json) is called body parsing middleware

//get my cart
cartApp.get("/get-cart/:username",expressAsyncHandler(async (request, response)=>{
    //get cart collection object
    let cartCollectionObject = request.app.get("cartCollectionObject");
    //get username
    let reqUsername = request.params.username;
    //get cart by username
    let mycart = await cartCollectionObject.findOne({username:reqUsername})
    if(mycart==null){
        response.send({message:'cart not existed'})
    }else{
        response.send({message:'cart exists',payload:mycart})
    }

}))

//add product to cart
cartApp.post("/add-to-cart", expressAsyncHandler(async (request, response) => {
        //get cart collection object
        let cartCollectionObject = request.app.get("cartCollectionObject");
        let newCartObj = request.body;
        //check if cart with this username already exists
        let cartOfDB = await cartCollectionObject.findOne({username:newCartObj.username})
        if(cartOfDB!=null){
            let productIndex = cartOfDB.products.findIndex(product => product.productId === newCartObj.productId);
        if (productIndex > -1) {
            // Product exists in cart, increment quantity
            cartOfDB.products[productIndex].quantity += 1;
        } else {
            // Product does not exist in cart, add new product
            cartOfDB.products.push({ 
                imageUrl:newCartObj.imageUrl,
                productId: newCartObj.productId,
                productName: newCartObj.productName,
                price: newCartObj.price,
                quantity: 1
            });
        }
        // Update the cart in the database
        await cartCollectionObject.updateOne({ username: newCartObj.username }, { $set: { products: cartOfDB.products } });
        response.send({ message: "Product added to cart successfully", cart: cartOfDB });
        }else {
            // Cart does not exist, create new cart
            let newCart = {
                username: newCartObj.username,
                products: [{
                    imageUrl:newCartObj.imageUrl,
                    productId: newCartObj.productId,
                    productName: newCartObj.productName,
                    Brand:newCartObj.brand,
                    price: newCartObj.price,
                    quantity: 1
                }]
            };
            // Insert new cart into the database
            await cartCollectionObject.insertOne(newCart);
            response.send({ message: "cart created and product added successfully", payload: newCart });
        }
}));

module.exports=cartApp;
