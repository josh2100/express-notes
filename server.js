const express = require("express");
const app = express();
const port = 3001;
// const { getNotes } = require();

// This allows public directory to be served
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello Express Notes Lover!");
});

app.get("/notes", (req, res) => {
  res.send("Notes?!");
  //   getNotes();
});

app.post("/", function (req, res) {
  res.send("Got a POST request!");
});

app.delete("/", function (req, res) {
  res.send("Got a DELETE request at /user");
});

app.listen(port, () => {
  console.log(`Express notes server listening at http://localhost:${port}`);
});
