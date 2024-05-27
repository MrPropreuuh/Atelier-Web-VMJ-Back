// backend/routes/loginRoutes.ts
import { Router } from 'express';
import { registerUser, authenticateUser } from '../controllers/loginController';

const router = Router();

// Route pour l'inscription
router.post('/register', registerUser);

// Route pour la connexion
router.post('/login', authenticateUser);

export default router;
