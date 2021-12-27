// Server variables
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
// Path and filesystem variables to read, write, update database
const path = require("path");
const fs = require("fs");
// Database json file
let db = require("./db/db.json");
// Utility functions
const { generateId } = require("./public/assets/js/util");

// Middleware to serve public files
app.use(express.static("public"));
// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// Parse incoming JSON data
app.use(express.json());

// Returns index.html homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// Return notes.html to display notes
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// getNotes() will fetch notes from database with this endpoint
app.get("/api/notes", function (req, res) {
  let results = db;

  console.log(`${req.method} request received to get notes`);

  res.json(results);
});

// Saved this endpoint only for testing purposes
app.post("/", function (req, res) {
  res.send("Got a POST request!");
});

// This will update database with new note, saveNotes() will fetch this
app.post("/api/notes", function (req, res) {
  let results = db;

  const newNote = req.body;
  console.log("new note: ", newNote);
  // Generate random ID for note
  newNote.id = generateId();
  console.log("new id note: ", newNote);

  // Get existing notes
  res.json(results);
  // Read existing notes
  fs.readFile("./db/db.json", "utf-8", (error, data) => {
    if (error) {
      console.error(error);
    } else {
      // Original database
      let database = db;
      // Add new note to database
      database.push(newNote);

      // Write new notes to database as a strings
      fs.writeFile(
        "./db/db.json",
        JSON.stringify(database, null, 4),
        (writeErr) =>
          writeErr
            ? console.error(writeErr)
            : console.info("Successfully updated notes!")
      );
    }
  });
});

app.delete("/api/notes/:id", function (req, res) {
  let { id } = req.params;

  const removedNote = db.find((element) => element.id === id);
  console.log("line 103 removedNote:", removedNote);
  if (!removedNote) {
    res.send(error);
  }

  db = db.filter((note) => note.id !== id);

  // Write new json

  fs.writeFile("./db/db.json", JSON.stringify(db, null, 4), (writeErr) =>
    writeErr
      ? console.error(writeErr)
      : console.info("Successfully updated notes!")
  );

  res.send("Got a DELETE request at /user");
  res.json(db);
});

app.listen(port, () => {
  console.log(`Express notes server listening at http://localhost:${port}`);
});
