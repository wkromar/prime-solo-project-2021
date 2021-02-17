const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

//add the changed information to the database
router.put("/:id", (req, res) => {
  const snackToEdit = req.params.id;
  const queryText = `UPDATE snack_list SET snack_name = $1, snack_image = $2 WHERE id = $3;`;
  pool
    .query(queryText, [req.body.snack_name, req.body.snack_image, snackToEdit])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error making Edit to database query ${queryText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
