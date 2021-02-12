const express = require("express");
const pool = require("../modules/pool");
const axios = require("axios");

const router = express.Router();

//return all search items
router.get("/:searchterm", (req, res) => {
  const snackList = [];
  console.log(req.params.searchterm);
  var search = JSON.stringify(req.params.searchterm);
  axios
    .get(
      `https://api.spoonacular.com/food/products/search?apiKey=${process.env.SPOONTACULAR_API_KEY}&query=${search}&number=2`
    )
    .then((response) => {
      response.data.products.forEach((snack) => {
        snackList.push({ url: snack.imageType, title: snack.title });
      });
      console.log(`get response: `, snackList);
      res.send(snackList);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
