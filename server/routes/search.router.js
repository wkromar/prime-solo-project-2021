const express = require("express");
const pool = require("../modules/pool");
const axios = require("axios");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const router = express.Router();

//return all search items
router.get("/:searchterm", rejectUnauthenticated, (req, res) => {
  const snackList = [];
  console.log(req.params.searchterm);
  var search = JSON.stringify(req.params.searchterm);
  axios
    .get(
      `https://api.spoonacular.com/food/products/search?apiKey=${process.env.SPOONTACULAR_API_KEY}&query=${search}&number=20`
    )
    .then((response) => {
      response.data.products.forEach((snack) => {
        snackList.push({
          url: snack.imageType,
          title: snack.title,
          id: snack.id,
        });
      });
      console.log(`get response: `, snackList);
      res.send(snackList);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.post("/", rejectUnauthenticated, (req, res) => {
  console.log("adding snacks to snack_list database");
  const newSnack = req.body;
  const queryText = `INSERT INTO "snack_list" ("snack_image", "snack_title", "snack_id",)
  VALUES ($1, $2, $3)`;
  pool
    .query(queryText, [newSnack.url, newSnack.title, newSnack.id])
    .then((response) => {
      console.log(response);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

//update snack parameters through the Edit feature
//still need to create the edit id page
router.put("/editId", (req, res) => {
  log(`in PUT category: editId: ${req.params.editId}, `);
});
module.exports = router;
module.exports = router;
