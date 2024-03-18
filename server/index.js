import mongooes from 'mongoose';
import express from 'express';
const app = express();
app.get('/', (req, resp) => [
    resp.send('This is it')
]);
app.use(cors({
    origin: [""],
    methods: ["POST", "GET"],
    Credential: true
}));
app.use(express.json());
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