const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(express.json());
const EventRoute = require("./routes/event");

app.use("/events", EventRoute);
//connect to db here
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("******* Connected to Database *******");
});

//Listen on 5002
app.listen(5002);
