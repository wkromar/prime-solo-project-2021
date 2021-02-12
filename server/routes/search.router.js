const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();

//return all search items
router.get(`/:searchterm`, (req,res) =>{
    const snackList = [];
    axios.get(`https://api.spoonacular.com/food/products/search?apiKey=${process.env.SPOONTACULAR_API_KEY}&query=${searchTerm}&number=2`)
    .then((response) =>{
        response.data.data.forEach((snack) =>{
            snackList.push({url: snack.imageType, snackName: snack.title})
        });
        console.log(`get response: `, snackList);
        res.send(snackList)
    }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
});

module.exports = router;