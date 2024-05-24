const express = require('express');
const app = express();
const itemRoutes = require('./routes/itemRoutes');
const path = require('path');

// Middleware pour servir des fichiers statiques du frontend
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Utiliser les routes définies
app.use('/', itemRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
