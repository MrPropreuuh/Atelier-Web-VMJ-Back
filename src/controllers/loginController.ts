// backend/controllers/loginController.ts
import { Request, Response } from 'express';
import { addUser, findUserByEmail, loginUser } from '../models/loginModel';

function registerUser(req: Request, res: Response): void {
    const { email, username, password } = req.body;
    
    if (findUserByEmail(email)) {
        res.status(400).json({ error: 'Cet email est déjà utilisé.' });
        return;
    }

    addUser(email, username, password);
    res.json({ message: 'Inscription réussie' });
}

function authenticateUser(req: Request, res: Response): void {
    const { email, password } = req.body;

    const user = loginUser(email, password);
    if (user) {
        res.json({ message: 'Connexion réussie', user });
    } else {
        res.status(401).json({ error: 'Email ou mot de passe incorrect.' });
    }
}

export { registerUser, authenticateUser };
