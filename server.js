const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require("./backend/database/db");
const fs = require("fs");

const app = express();

var corsOptions = {
  //origin: "http://172.30.218.52:8080",
  origin: "https://gouygui.herokuapp.com:8080",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("./dist/gouygui"));

app.route("/api/cats").get((req, res) => {
  res.send({
    cats: [{ name: "lilly" }, { name: "lucy" }],
  });
});

app.listen(process.env.PORT || 8080);
