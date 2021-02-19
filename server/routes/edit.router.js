const express = require("express");
const pool = require("../modules/pool");
const {
  rejectUnauthenticatedAdmin,
} = require("../modules/admin-authentication-middleware");
const router = express.Router();

//add the changed information to the database
router.put("/:id", rejectUnauthenticatedAdmin, (req, res) => {
  const snackToEdit = req.params.id;
  const queryText = `UPDATE snack_list SET snack_name = $1, snack_image = $2, favorites = $3 WHERE id = $4;`;
  pool
    .query(queryText, [
      req.body.snack_name,
      req.body.snack_image,
      req.body.favorites,
      snackToEdit,
    ])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error making Edit to database query ${queryText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
