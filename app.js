require("dotenv").config();
const express = require("express");
const { blogs, sequelize, users } = require("./model/index");

const app = express();
const blogRoute = require("./routes/blogRoute");
const authRoute = require("./routes/authRoute");

app.set("view engine", "ejs");
require("./model/index");
app.use(express.urlencoded({ extended: true }));

app.use("", blogRoute);
app.use("", authRoute);

app.use(express.static("public/css/"));
app.use(express.static("./storage/"));

app.listen(process.env.PORT, () => {
  console.log(`Project running at port ${process.env.PORT}`);
});
