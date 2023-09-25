

db.products.insertMany([
  {
    lastname: "Ben Lahmer",
    firstName: "Fares",
    Email: "fares@gmail.com",
    age: 26,
  },
  {
    lastname: "Fatnassi",
    firstName: "Sarra",
    Email: "sarra.f@gmail.com",
    age: 40,
  },
]);



Product.findOne({ roomNo: 76 })

db.Products.find({ isPresent: true })

db.product.find({age: {$lt : 18}})


db.product.deleteOne({age : {$lt : 5}})
