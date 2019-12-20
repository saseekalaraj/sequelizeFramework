//create server
const express = require("express");
const app = express();
//Access Port
const PORT = 3000;

const path = require("path");
const bodyParser = require("body-parser");

//request parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//express Router
const router = express.Router();
app.use(router);

const rootPath = path.resolve("./dist");
app.use(express.static(rootPath));

//DB Connection
require('./src/database/connection')

router.use((err, req, res, next) => {
  if (err) {
    return res.send(err.message);
  }
});

app.listen(PORT, err => {
  if (err) return console.log(`Cannot Listen on PORT: ${PORT}`);
  console.log(`Server Listening on: http://localhost:${PORT}`);
});
