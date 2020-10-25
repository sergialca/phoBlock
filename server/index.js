const http = require("http");
const express = require("express");
const app = express();
const request = require("request");
const helmet = require("helmet");
const cors = require("cors");
const axios = require('axios')

const port = process.env.PORT || 3001;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use(helmet());

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/signup", (req, res) => {
  axios
  .post('https://whatever.com/todos', {
    todo: 'Buy the milk'
  })
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })
});

app.post("/login", (req, res) => {
    console.log("email var", req.body.email);
      axios
  .get('https://6y458uslg3.execute-api.eu-west-3.amazonaws.com/elixos/assets', {
    todo: 'Buy the milk'
  })
  .then(resu => {
    console.log(`statusCode: ${res.statusCode}`)
    res.send(resu.data);
  })
  .catch(error => {
    console.error(error)
  })
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
