const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// return all favorite snacks
router.get("/", (req, res) => {
  const queryText = `SELECT * FROM "favorites" ORDER BY "id";`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

// add a new favorite
//i want all items to be rendered with a category of faovrited. so I want an
//initial dump of items from the API into my snackList so the
router.post("/", (req, res) => {
  console.log(
    `In favorite POST: title: ${req.body.title}  snack ID: ${req.body.id}`
  );
  const newFavorite = req.body;
  const queryText = `
    INSERT INTO "favorites" ("snack_name","snack_id")
    VALUES ($1, $2)`;

  pool
    .query(queryText, [newFavorite.title, newFavorite.id])
    .then((response) => {
      console.log("response from favorite post", response);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("error in favorite post", error);
      res.sendStatus(500);
    });
});

// delete a favorite
router.delete("/", (req, res) => {
  res.sendStatus(200);
  console.log("Item successfully deleted");
});

module.exports = router;
