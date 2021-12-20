const router = require("express").Router();

// GET request
// router.get("/notes", (req, res) => {
//   console.log(req.body);
//   console.log(res.body);
// });

// GET request
// router.get("api/notes", (req, res) => {
//   console.log(req.body);
//   console.log(res.body);
//   res.send("Got a POST request!");
// });

// POST request
// router.post("api/notes", (req, res) => {
//   console.log(req.body);
//   console.log(res.body);
//   //   res.json(notes);
//   res.send("Got a POST request!");
//   // .then((note) => res.json(note))
//   // .catch((err) => res.status(500).json(err));
// });

// router.post("/animals", (req, res) => {
//   // set id based on what the next index of the array will be
//   req.body.id = animals.length.toString();

//   // if any data in req.body is incorrect, send 400 error back
//   if (!validateAnimal(req.body)) {
//     res.status(400).send("The animal is not properly formatted.");
//   } else {
//     const animal = createNewAnimal(req.body, animals);
//     res.json(animal);
//   }
// });

// POST request
// router.post('/notes', (req, res) => {
//     saveData
//         .addNote(req.body)
//         .then((note) => res.json(note))
//         .catch(err => res.status(500).json(err));
// });

module.exports = router;
