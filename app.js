import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import helmet from 'helmet'
import 'dotenv/config';
import { startDb } from './src/database/database.js'
import { postRouter } from './src/routes/post.routes.js';


//settings
const app = express();
const port = process.env.PORT;
app.use('/', postRouter)


//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'));
app.use(helmet({
    contentSecurityPolicy: false
}));

// Iniciando servidor y conectando a database
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    startDb();
});