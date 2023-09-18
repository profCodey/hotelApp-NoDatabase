var express = require("express");
var app = express.Router();

const rooms = require("../roomsModel");
console.log("heloooo", rooms);

// app.get("/", (req, res) => {
//   return res.status(200).json(rooms);
// });

app.get("/", (req, res) => {
  return res.status(200).json(rooms);
});

app.post("/create", (req, res) => {
  //   console.log("Hello everybody");
  try {
    rooms.push(req.body);
    return res.send({
      message: "Room fetched sucessfully",
      data: rooms,
    });
  } catch (error) {
    console.log(error);
  }
});

app.put("/edit", (req, res) => {
  //   console.log("Hello everybody");
  try {
    let roomToEdit = rooms.find((room) => room.id === req.body.id);

    roomToEdit.name = req.body.name;
    roomToEdit.availability = req.body.availability;
    roomToEdit.bedSize = req.body.bedSize;
    roomToEdit.item = req.body.item;
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;
