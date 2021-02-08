const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();

//return all search items
router.get(`/:searchterm`, (req,res) =>{
    const snackList = [];
    axios.get(`https://api.spoonacular.com/recipes/complexSearch_key=${process.env.SPOONTACULAR_API_KEY}&q=${req.params.searchterm}&limit=4`)
})