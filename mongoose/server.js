const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

//Connect to mongoose
mongoose.connect("mongodb://localhost:27017/mongooseCheckpoint", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//create a model
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
  location: String,
  // phoneNumber: { type: String, required: true },
  gender: String,
});

const Person = mongoose.model("Person", personSchema);

const productSchema = new mongoose.Schema({
  name: {type: String, required: true},
  price: Number,
  category: String,
  description: String,
})

const Product = mongoose.model("Product", productSchema)

//create and save a record of a model
app.post("/new-member", (request, response) => {
  try {
    const member = new Person(request.body);
    member.save();
    return response.json("Member added successfully");
  } catch (err) {
    console.log(err);
  }
});


app.post("/single-member", (req, res) => {
  try {
    const member = new Person(req.body);
    member.save();
    return res.status(201).json({ message: "Member has been sucessfully registered" });
  } catch (err) {
      console.log(err);
    return res.staus(500).json("There was an error registering the member", err);

  }
})

app.post('/many-member', async (req, res) => {
  try {

   const members = await Person.create(req.body);
  //  members.save();
   return res.status(201).json({
     message: "Members have been successfully registered",
     data: members
   });
  } catch (err) {
    console.log(err);
     return res.status(500).json({
       message: "There was an error registering the members", err
     });
  }
 
})

app.get('/all-members', async (req, res) => {
  try {
    const members = await Person.find()

    return res.status(200).json({
      message: "All members have been successfully retrieved",
      data: members
    })
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "There was an error retrieving the members", err
    })
 
  };
});

app.get('/single-member/:id', async (req, res) => {
  try {
    console.log(req.params.id);
    const id = req.params.id;
    const members = await Person.findById(id);
    return res.status(200).json({
      message: "Member has been successfully retrieved",
      data: members
    });
  } catch (err) {
    
  }
});


const PORT = 8000;
app.listen(PORT, () =>
  console.log(`Server connected succesfully on port ${PORT}`)
);
