//create express application
const exp = require('express')
const app = exp()//app is express object--> express object internally has http server
const mClient = require("mongodb").MongoClient;

require('dotenv').config();

//import path module->core module(neednot install)
const path = require('path')

//connect build of react with nodejs
app.use(exp.static(path.join(__dirname, './build')))

//DB connection URL(in double quote)
const DBurl = process.env.DATABASE_CONNECTION_URL

//connect with mongodb Server
mClient.connect(DBurl)
    .then((client) => {
        //create databse object
        let dbObj = client.db("fullstackdb")

        //create collection objects
        let userCollectionObject = dbObj.collection("usercollection")
        let productCollectionObject = dbObj.collection("productcollection")
        let cartCollectionObject = dbObj.collection("cartcollection")

        //sharing collection objects to APIS
        app.set("userCollectionObject", userCollectionObject);
        app.set("productCollectionObject", productCollectionObject);
        app.set("cartCollectionObject", cartCollectionObject);

        console.log("DB connection success")
    })
    .catch(err => console.log('Error in DB connection', err))

//import userApp and productApp
const userApp = require('./APIS/userApi');
const productApp = require('./APIS/productApi');
const cartApp = require('./APIS/cartApi');

//path middleware
app.use('/user-api', userApp)
app.use('/product-api', productApp)
app.use('/cart-api', cartApp)

//dealing with page refresh
app.use('*', (request, response) => {
    response.sendFile(path.join(__dirname, './build/index.html'))
})

//handling invalid paths
app.use((request, response, next) => {
    response.send({ message: `path ${request.url} is invalid` })
})


//error handling middleware
app.use((error, request, response, next) => {
    response.send({ message: 'error occured', reason: `${error.message}` })
})

//assign the port number
const port = process.env.PORT;
app.listen(port, () => console.log(`web server listening on port ${port}`))
