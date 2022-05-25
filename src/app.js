import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from "morgan";
import dotenv from 'dotenv';
import entityRoutes from './routes/entity.routes';

dotenv.config({ path: '.env' });

const PORT = process.env.PORT || 4000;
const app = express();
app.set('port', PORT);
app.use(cors());

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/entity', entityRoutes);

app.get('/test', (req, res) => {
    res.status(200).json([]);
});

app.listen(PORT, () => console.log(`SERVER ON PORT ${PORT}`));

export default app;
