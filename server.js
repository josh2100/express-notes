// not using routes at this time
//const apiRoutes = require("./routes/apiRoutes");
const express = require("express");
const path = require("path");
const app = express();
const port = 3001;

const db = require("./db/db.json");

// Middleware function to server public files
app.use(express.static("public"));
// Router stuff that never works
// app.use("/api", apiRoutes);
// app.use("/", htmlRoutes);

// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// Parse incoming JSON data
app.use(express.json());

// Homepage
app.get("/", (req, res) => {
  //Express servers send responses using the .send() method on the response object.
  //.send() will take any input and include it in the response body.
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// Return notes page
app.get("/notes", (req, res) => {
  //Express servers send responses using the .send() method on the response object.
  //.send() will take any input and include it in the response body.
  res.sendFile(path.join(__dirname, "./public/notes.html"));

  //render notes?
});

// THIS WORKS WITH INSOMNIA DO NOT DELETE
app.get("/api/notes", function (req, res) {
  let results = db;
  //   // let results = [
  //   //   {
  //   //     title: "Test Title",
  //   //     text: "Test text",
  //   //   },
  //   // ];

  res.json(results);

  // res.send("Got a GET request!");
});

// GET request
// this is the first request made, SHOULD RETURN JSON
// very broken
// app.get("api/notes", function (req, res) {
//   // let results = db;
//   // let results = [
//   //   {
//   //     title: "Test Title",
//   //     text: "Test text",
//   //   },
//   // ];

//   // res.json(results);
//   // res.send(results);
//   res.send("hello chaia");
// });

// THIS WORKS WITH INSOMNIA DO NOT DELETE
app.post("/", function (req, res) {
  res.send("Got a POST request!");
});

// THIS WORKS WITH INSOMNIA DO NOT DELETE
app.post("/api/notes", function (req, res) {
  let results = db;
  //   // let results = [
  //   //   {
  //   //     title: "Test Title",
  //   //     text: "Test text",
  //   //   },
  //   // ];

  res.json(results);

  // res.send("Got a POST request!");
});

// THIS WORKS WITH INSOMNIA DO NOT DELETE
app.delete("/", function (req, res) {
  res.send("Got a DELETE request at /user");
});

app.listen(port, () => {
  console.log(`Express notes server listening at http://localhost:${port}`);
});
