const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

//take snack chosen from api and give to my database
router.post("/", (req, res) => {
  const snackrSnacks = req.body;
  console.log("in mySnacks router", snackrSnacks);
  const queryText = `INSERT INTO "snack_list" ("snack_image", "snack_name", "snack_id")
    VALUES($1, $2, $3) `;

  pool
    .query(queryText, [snackrSnacks.url, snackrSnacks.title, snackrSnacks.id])
    .then((response) => {
      console.log(response);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

//return contents of my database to the AllSnacks Page
router.get("/", (req, res) => {
  const queryText = `SELECT * FROM "snack_list" ORDER BY "id";`;
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

module.exports = router;
