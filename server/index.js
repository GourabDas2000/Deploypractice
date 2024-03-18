import mongooes from 'mongoose';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userauth from './asset/router/auth.js';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', userauth);
mongooes.connect(process.env.MONGODB_URL).then(() => {
    console.log(process.env.MONGODB_URL)
    console.log('Connected');
}).catch((e) => {
    console.log('Disconnected');
    console.log(e);
});
app.listen(5000, () => {
    console.log('server running at port 5000');
    console.log('connected');
});

// {
//     origin: [""],
//     methods: ["POST", "GET"],
//     Credential: true
// }