import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv'

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true})); //Used to parse JSON bodies
app.use(express.urlencoded({ limit: "30mb", extended: true})); //Parse URL-encoded bodies
app.use(cors());

app.use('/posts', postRoutes);

// https://cloud.mongodb.com/v2/612f9c2b0c725656ddb32923#clusters


const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.CONNECTION_URL

mongoose.connect(CONNECTION_URL, {useNEWUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Listening on port ${PORT}`)))
    .catch(err => console.log(err.message));

