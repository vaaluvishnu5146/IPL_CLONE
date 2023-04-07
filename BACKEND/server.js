const express = require("express");
const app = require("./app");
const cors = require("cors");
const dotenv = require("dotenv");

/**
 * CREATE A WEB SERVER WITH EXPRESS INSTANCE
 */
const server = express();
const PORT = 4000;
/**
 * CONFIGURATION FOR ENV VARIABLES
 */
dotenv.config();

/**
 * INJECT DATABASE CODE
 */
require("./dbconfig");

/**
 * CONFIGURING THE CORS
 */
server.use(cors());

/**
 * IMPORT AND REGISTER THE EXPRESS APPLICATION
 */
server.use("/", app);

/**
 * START THE SERVER AND LISTEN TO PORT {4000}
 */
server.listen(PORT, () => {
  console.log(`SERVER STARTED ${PORT}`);
});
