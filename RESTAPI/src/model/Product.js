import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: { 
        type: Number,
        required: true,
    },  
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    countInStock: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        enum : [1,2,3,4,5]
    },
    numReviews: {
        type: Number,
        required: true,
    },
},
    {
        timestamps: true,
    }
)

export default mongoose.model("Product", productSchema)

//name, description, price, image, category, countInStock, rating, numReviews,