const express = require("express");
const app = express();
const morgan = require("morgan");
const deansPlaces = require("./public/dummyData");
const allPlaces = require("./public/allPlaces");
const placeIndexFunc = require("./public/placeIndex");
const errorFunc = require("./errorFunc");

// ---------------------USE PUBLIC FILES-----------------------
app.use(express.static(__dirname + "/public"));

// ---------------------MIDDLEWARE-----------------------
app.use(morgan("dev"));

// ---------------------GET ENDPOINTS--------------------------

// not sure why this isnt working!!!!
app.get("/", (req, res) => {
  // First, get the list of posts.
  res.send("<h1>Home Page</h1>");
});

// ---------------------ENDPOINT #1--------------------------

app.get("/health", (req, res) => {
  res.send("<h1>Server is online!</h1>");
});

// ---------------------ENDPOINT #2--------------------------
app.get("/places", (req, res) => {
  // First, get the list of posts.
  // const places = deansPlaces.list();
  // Then, prepare some HTML to send as output.
  res.send(allPlaces());
});
// ---------------------ENDPOINT #3--------------------------

app.get("/places/:placeIndex", (req, res) => {
  const placeIndex = req.params.placeIndex;
  res.send(placeIndexFunc(placeIndex));
});

// ---------------------ERROR HANDLER----------------------

// Unlike other middleware this is the last route in your codebase, right above where you start your server
app.use((err, req, res, next) => {
  // Console log where the error happened
  console.error(err.stack);

  // Send the user back something to communicate that its broken
  res.status(500).send(errorFunc());
});

// ---------------------TESTING PORT----------------------
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
