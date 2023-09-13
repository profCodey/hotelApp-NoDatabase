const express = require("express");
const app = express();
const rooms = require("./roomsModel.js");
const bodyparser = require("body-parser");
const roomRouter = require("./routes/roomsRouter.js");
const userRouter = require("./routes/userRouter.js");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use("/room", roomRouter);
app.use("/user", userRouter);

const port = 8080;
app.listen(port, () => {
  console.log("Server is now connected on port " + port);
});
