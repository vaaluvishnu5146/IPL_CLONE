const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const TeamsController = require("./Controllers/Teams.controller");
/**
 * REGISTER ALL THE CONTROLLERS AND MIDDLEWARE BELOW
 */
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use("/teams", TeamsController);
app.use("/test", (req, res, next) => {
  res.status(200).json({
    message: "Hurrah!!!",
  });
});

module.exports = app;
