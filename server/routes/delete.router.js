const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

router.delete("/:id", (req, res) => {
  const snackToDelete = req.params.id;
  console.log(req.params.id);
  const queryText = `DELETE FROM snack_list WHERE id = $1;`;
  pool
    .query(queryText, [snackToDelete])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error making DELETE database query ${queryText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
