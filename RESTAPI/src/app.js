import express from "express";
const app = express();
import mongoose from "mongoose";
import bodyParser from "body-parser";
import createError from "http-errors";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import dotenv from "dotenv";
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
    app.use(cors());
    app.use(cookieParser());
    app.use(express.json());

    app.use(function (req, res, next) {
        if (!req.user) return next(createError(401, 'Please login to view this page.'))
        next()
      })


    const PORT = 2000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
  