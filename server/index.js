import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';

const app = express();

app.use(express.json({ limit: "30mb", extended: true})); //Used to parse JSON bodies
app.use(express.urlencoded({ limit: "30mb", extended: true})); //Parse URL-encoded bodies
app.use(cors());

app.use('/posts', postRoutes);

// https://cloud.mongodb.com/v2/612f9c2b0c725656ddb32923#clusters
const CONNECTION_URL  = "mongodb+srv://Xr7TSi:Tacoma10@cluster0.7ekba.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNEWUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Listening on port ${PORT}`)))
    .catch(err => console.log(err.message));

