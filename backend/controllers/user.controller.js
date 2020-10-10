const db = require("../model");

const User = db.user;

exports.getAllusers = (req, res) => {
  User.find({}, function (err, users) {
    res.status(200).send("users");
  });
};
