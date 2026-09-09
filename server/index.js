import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Enquiry } from './models/Enquiry.js';

const app = express();
const port = Number(process.env.PORT || 5000);
const memoryEnquiries = [];
let mongoReady = false;

app.use(cors());
app.use(express.json({ limit: '100kb' }));

if (process.env.MONGODB_URI) {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      mongoReady = true;
      console.log('MongoDB connected');
    })
    .catch((error) => console.warn(`MongoDB unavailable: ${error.message}`));
}

app.get('/api/health', (_request, response) => {
  response.json({ ok: true, database: mongoReady ? 'mongodb' : 'memory' });
});

app.post('/api/enquiries', async (request, response) => {
  const { name, email, interest, phone = '', message } = request.body || {};

  if (!name?.trim() || !email?.trim() || !interest?.trim() || !message?.trim()) {
    return response.status(400).json({ message: 'Please complete all required fields.' });
  }

  const payload = {
    name: name.trim(),
    email: email.trim(),
    interest: interest.trim(),
    phone: phone.trim(),
    message: message.trim(),
  };

  try {
    const enquiry = mongoReady
      ? await Enquiry.create(payload)
      : { ...payload, _id: `local-${Date.now()}`, createdAt: new Date() };

    if (!mongoReady) memoryEnquiries.push(enquiry);
    return response.status(201).json({ message: 'Enquiry received. We will be in touch.', id: enquiry._id });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Could not send the enquiry right now.' });
  }
});

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(currentDir, '../dist');
app.use(express.static(distDir));
app.get(/.*/, (_request, response) => response.sendFile(path.join(distDir, 'index.html')));

app.listen(port, '0.0.0.0', () => {
  console.log(`ESFIRE API listening on http://127.0.0.1:${port}`);
});
