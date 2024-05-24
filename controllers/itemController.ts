import { Request, Response } from 'express';
import { getAllItems } from '../models/itemModel';

function apiItems(req: Request, res: Response): void {
    res.json(getAllItems());
}

export { apiItems };
