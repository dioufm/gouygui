const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require("./backend/database/db");
const fs = require("fs");

const app = express();

var corsOptions = {
  // origin: "http://172.30.218.52:8080",
  origin: "https://gouygui.herokuapp.com:8080",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("./dist/gouygui"));

/*
app.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "dist/gouygui/" })
);
*/
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

app.listen(process.env.PORT || 8080);
