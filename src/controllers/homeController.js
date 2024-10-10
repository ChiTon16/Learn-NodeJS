const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render("home.ejs");
};

const getTonz = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomePage,
  getTonz,
};
