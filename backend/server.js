import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser'; // PARSE HTML BODY
import api from './routes';


const app = express();
const port = process.env.PORT || 5000;
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => { console.log('Connected to mongodb server'); });

mongoose.connect('mongodb://localhost/movie');

app.get('/', (req, res)=>{
    res.send('hi');
})
app.use(bodyParser.json());
app.use('/api', api);

app.listen(port, () => console.log(`Listening on port ${port}`));
