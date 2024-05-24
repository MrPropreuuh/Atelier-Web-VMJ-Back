// backend/app.ts
import express from 'express';
import path from 'path';
import itemRoutes from './routes/itemRoutes';

const app = express();

// Middleware pour servir des fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Utiliser les routes définies
app.use('/api', itemRoutes);

// Serveur simple pour vérifier que le backend fonctionne
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
