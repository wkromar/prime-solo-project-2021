const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const { default: axios } = require("axios");

//USING SEARCH ROUTER NOW
/**
 * GET route template
 */

//api.spoonacular.com/food/products/search_key=${process.env.SPOONTACULAR_API_KEY}&q=${req.params.searchterm}&limit=4
//I want to grab all(100) items into my snackReducer
router.get(`/`, (req, res) => {
  const snackList = [];
  axios
    .get(
      `https://api.spoonacular.com/food/products/search?apiKey=${process.env.SPOONTACULAR_API_KEY}&query=pizza&number=2`
    )
    .then((response) => {
      console.log(response);

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

router.post("/", (req, res) => {
  console.log("in favorite router");
});

module.exports = router;
