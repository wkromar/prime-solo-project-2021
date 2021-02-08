const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();

//return all search items
router.get(`/:searchterm`, (req,res) =>{
    const snackList = [];
    axios.get(`https://api.spoonacular.com/food/products/search_key=${process.env.SPOONTACULAR_API_KEY}&q=${req.params.searchterm}&limit=4`)
    .then((response) =>{
        response.data.data.forEach((snack) =>{
            snackList.push({url: snack.imageType, snackName: snack.title, likes: snack.likes})
        });
        console.log(`get response: `, snackList);
        res.send(snackList)
    }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
});

module.exports = router;