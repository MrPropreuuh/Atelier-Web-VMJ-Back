import { Request, Response } from 'express';
import { saveContact, getAllContacts } from '../models/contactModel';

async function handleContactForm(req: Request, res: Response): Promise<void> {
  try {
    console.log('Request body:', req.body);
    const { firstName, lastName, email, content } = req.body;
    if (!firstName || !lastName || !email || !content) {
      res.status(400).json({ error: 'All fields are required.' });
      return;
    }
    await saveContact({ firstName, lastName, email, content });
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Failed to send message.' });
  }
}

async function getContacts(req: Request, res: Response): Promise<void> {
  try {
    const contacts = getAllContacts();
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error retrieving contacts:', error);
    res.status(500).json({ error: 'Failed to retrieve contacts.' });
  }
}

export { handleContactForm, getContacts };
