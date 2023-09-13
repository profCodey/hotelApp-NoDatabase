const express = require("express");
const app = express();
const rooms = require("./rooms.js");
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.get("/", (req, res) => {
  return res.status(200).send(rooms);
});

app.get("/", (req, res) => {
  return res.status(200).send(rooms);
});

app.post("/", (req, res) => {
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

app.put("/", (req, res) => {
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

const port = 8080;
app.listen(port, () => {
  console.log("Server is now connected on port " + port);
});
