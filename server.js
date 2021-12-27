// not using routes at this time
//const apiRoutes = require("./routes/apiRoutes");
// Router stuff that never works
// app.use("/api", apiRoutes);
// app.use("/", htmlRoutes);
// Server variables
const express = require("express");
const app = express();
const port = 3001; //process.env.PORT || for heroku
// Path and filesystem variables to read, write, update database
const path = require("path");
const fs = require("fs");
// Database json file
let db = require("./db/db.json");
// My custom functions
const { generateId } = require("./public/assets/js/util");

// Middleware to serve public files
app.use(express.static("public"));
// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// Parse incoming JSON data
app.use(express.json());

// Returns index.html
app.get("/", (req, res) => {
  //Express servers send responses using the .send() method on the response object.
  //.send() will take any input and include it in the response body.
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// Return notes.html
app.get("/notes", (req, res) => {
  //Express servers send responses using the .send() method on the response object.
  //.send() will take any input and include it in the response body.
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// getNotes() will fetch this
app.get("/api/notes", function (req, res) {
  // Send a message to the client
  // res.json(`${req.method} request received to get reviews`);

  let results = db;

  console.log(`${req.method} request received to get notes`);

  res.json(results);
});

// THIS WORKS WITH INSOMNIA DO NOT DELETE
app.post("/", function (req, res) {
  res.send("Got a POST request!");
});

// THIS WILL UPDATE DATABASE saveNotes() will fetch this
app.post("/api/notes", function (req, res) {
  let results = db;
  // Must add Id to new note
  const newNote = req.body;
  console.log("new note: ", newNote);
  newNote.id = generateId();
  console.log("new id note: ", newNote);
  // console.log(`${req.method} request received to add a note`);
  // console.log("existing notes:", results);

  // Get existing notes
  res.json(results); // not necessary for front end??
  // Read existing notes
  fs.readFile("./db/db.json", "utf-8", (error, data) => {
    if (error) {
      console.error(error);
    } else {
      // Original database
      let database = db;
      // Add new note to database
      database.push(newNote);

      // console.log("database:", database);

      // Write new notes to database, must be a string
      fs.writeFile(
        "./db/db.json",
        JSON.stringify(database, null, 4),
        (writeErr) =>
          writeErr
            ? console.error(writeErr)
            : console.info("Successfully updated notes!")
      );
    }
  }); // End readfile
}); /// End POST

// app.delete("/", function (req, res) {
//   res.send("Got a DELETE request at /user");
// });

// app.delete breaks server
app.delete("/api/notes/:id", function (req, res) {
  let { id } = req.params;
  console.log("line 103 id:", id);

  const removedNote = db.find((element) => element.id === id);
  console.log("line 103 removedNote:", removedNote);
  if (!removedNote) {
    res.send(error);
  }

  db = db.filter((note) => note.id !== id);

  //write new json

  fs.writeFile("./db/db.json", JSON.stringify(db, null, 4), (writeErr) =>
    writeErr
      ? console.error(writeErr)
      : console.info("Successfully updated notes!")
  );

  console.log(`delete request ${db}`);
  res.send("Got a DELETE request at /user");
  res.json(db);
});

app.listen(port, () => {
  console.log(`Express notes server listening at http://localhost:${port}`);
});
