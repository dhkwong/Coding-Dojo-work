const express = require('express');
const router = express.Router();
const scraper = require('./../controllers/scraper');

router.get('/youtube', scraper.youtube)


module.exports = router;
