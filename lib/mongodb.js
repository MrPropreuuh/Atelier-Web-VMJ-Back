// backend/lib/mongodb.js
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const uri = process.env.MONGODB_URI;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
    throw new Error('Please add your Mongo URI to .env');
}

if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

async function connectToDatabase() {
    const client = await clientPromise;
    const db = client.db();
    return { db, client };
}

module.exports = connectToDatabase;
