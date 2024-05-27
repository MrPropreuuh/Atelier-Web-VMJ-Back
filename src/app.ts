
import { addUser, UserRole } from './models/loginModel'; // Import de la fonction addUser
// backend/app.ts
import express from 'express';
import path from 'path';
import contactRoutes from './routes/contactRoutes';
import loginRoutes from './routes/loginRoutes'; // Import des routes de login
import cors from 'cors'; // Import du middleware CORS


const app = express();

// Middleware pour autoriser les requêtes de toutes les origines
app.use(cors());

// Middleware pour parser le JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware pour servir des fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Utiliser les routes définies

// Ajout de l'utilisateur admin lors du démarrage de l'application
addUser('admin@admin.com', 'admin', 'admin', UserRole.ADMIN);

app.use('/', contactRoutes);
app.use('/api/user', loginRoutes); // Utiliser les routes de login


// Serveur simple pour vérifier que le backend fonctionne
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
