// backend/routes/artworks.js
const express = require('express');
const router = express.Router();
const connectToDatabase = require('../lib/mongodb');

router.get('/', async (req, res) => {
    const db = await connectToDatabase();
    const artworks = await db.collection('artworks').find({}).toArray();
    res.json(artworks);
});

module.exports = router;
