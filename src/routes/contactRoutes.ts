import { Router } from 'express';
import { handleContactForm, getContacts } from '../controllers/contactController';

const router = Router();

router.post('/contact', handleContactForm);
router.get('/contacts', getContacts);

export default router;
