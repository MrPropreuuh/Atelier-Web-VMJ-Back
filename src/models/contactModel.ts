import fs from 'fs';
import path from 'path';

interface Contact {
  firstName: string;
  lastName: string;
  email: string;
  content: string;
}

const contactsFilePath = path.join(__dirname, 'contacts.json');

function saveContact(contact: Contact): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    // Charger les contacts existants depuis le fichier JSON
    let contacts: Contact[] = [];
    try {
      if (fs.existsSync(contactsFilePath)) {
        const contactsData = fs.readFileSync(contactsFilePath, 'utf-8');
        contacts = JSON.parse(contactsData);
      }
    } catch (error) {
      console.error('Error reading contacts file:', error);
    }

    // Ajouter le nouveau contact
    contacts.push(contact);

    // Écrire les contacts mis à jour dans le fichier JSON
    try {
      fs.writeFileSync(contactsFilePath, JSON.stringify(contacts, null, 2));
      resolve();
    } catch (error) {
      console.error('Error writing contacts file:', error);
      reject(error);
    }
  });
}

function getAllContacts(): Contact[] {
  // Charger tous les contacts depuis le fichier JSON
  try {
    if (fs.existsSync(contactsFilePath)) {
      const contactsData = fs.readFileSync(contactsFilePath, 'utf-8');
      return JSON.parse(contactsData);
    } else {
      return [];
    }
  } catch (error) {
    console.error('Error reading contacts file:', error);
    return [];
  }
}

export { Contact, saveContact, getAllContacts, contactsFilePath }; // Exportation de contactsFilePath
