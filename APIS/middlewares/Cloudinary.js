var cloudinary = require("cloudinary").v2;
const {CloudinaryStorage} = require("multer-storage-cloudinary")
const multer= require("multer")

//configure cloudinary
cloudinary.config({
    cloud_name :process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET,
    secure:true
})

//config cloudinary storage
const cloudinaryStorage = new CloudinaryStorage({
    cloudinary:cloudinary,
    params: async(req,file)=>{
        return{
            folder:"fullstackapp",
            public_id:file.fieldname + "-" +Date.now(),
        }
    }
})

//configure multer
let upload = multer({storage:cloudinaryStorage})

module.exports = upload;

