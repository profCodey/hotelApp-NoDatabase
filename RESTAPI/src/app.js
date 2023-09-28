import express from "express";
const app = express();
import mongoose from "mongoose";
import bodyParser from "body-parser";
import createError from "http-errors";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import Product from "./model/Product.js";
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }).then(() => {
        console.log("Connected to MongoDB");
    }).catch((error)=>{
        console.error("MongoDB connection error:", error);
    });

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(logger("dev"));
    // app.use(cors());
    app.use(cookieParser());
    app.use(express.json());

    //GET ALL PRODUCTS
      app.get('/all-products', async (req, res)=>{
        console.log("dddd")
try{
   const product = await Product.find()
return res.status(200).json({
         message: "Products gotten successfully",
         data: product
   })
   

}catch(error){
console.log(error)
      }} )  


      //DELETE BY ID
      app.delete('/delete/:id', (req, res)=> {
        const id = req.params.id
       try{
        const product = Product.findByIdAndDelete(id)
        return res.status(200).json({
          message: "Product deleted successfully",
          data: product
        })
       }catch(error){
console.log(error)
       }
      })

    //   app.use(function (req, res, next) {
    //     if (!req.user) return next(createError(401, 'Please login to view this page.'))
    //     next()
    //   })

    const PORT = 7000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
  