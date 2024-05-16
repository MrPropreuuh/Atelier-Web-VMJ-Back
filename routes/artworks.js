// backend/routes/artworks.js
const express = require('express');
const router = express.Router();
const connectToDatabase = require('../lib/mongodb');

router.get('/', async (req, res) => {
    try {
        const { db } = await connectToDatabase();
        const artworks = await db.collection('artworks').find({}).toArray();
        res.json(artworks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching artworks', error });
    }
});

router.post('/', async (req, res) => {
    try {
        const { db } = await connectToDatabase();
        const artwork = req.body;
        await db.collection('artworks').insertOne(artwork);
        res.status(201).json(artwork);
    } catch (error) {
        res.status(500).json({ message: 'Error adding artwork', error });
    }
});

module.exports = router;
