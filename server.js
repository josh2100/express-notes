const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello Express Notes Lover!");
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
