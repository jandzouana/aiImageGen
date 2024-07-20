import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';
import post from "./mongodb/models/post.js";

dotenv.config();

const port = 8080;

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async(req, res) => {
    res.send("Hello from DALL-E!");
})

const startServer = async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen()
    }
    catch(e){
        console.error(e);
    }
    app.listen(port, ()=> console.log(`Server has started on http://localhost:${port}`))
}

startServer();
