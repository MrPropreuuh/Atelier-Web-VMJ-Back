// backend/server.js
const express = require('express');
const dotenv = require('dotenv');
const mongodb = require('./lib/mongodb');
const artworks = require('./routes/artworks');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/artworks', artworks);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
