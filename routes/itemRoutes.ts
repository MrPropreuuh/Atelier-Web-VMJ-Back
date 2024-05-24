import { Router } from 'express';
import { apiItems } from '../controllers/itemController';

const router = Router();

router.get('/items', apiItems);

export default router;
