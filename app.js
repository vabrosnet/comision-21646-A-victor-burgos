import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import { startDb } from './src/config/database.js';
import { postRouter } from './src/routes/post.routes.js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';


//settings
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express();
const port = 3000;

//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'));
app.use(helmet({
    contentSecurityPolicy: false
}));

//rutas absolutas
app.use(express.static(path.join(__dirname, "src", "public")))
app.set('views', path.join(__dirname, "src", "views"))
app.set('view engine', 'ejs');

//router
app.use('/', postRouter)

// Iniciando servidor y conectando a database
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    startDb();
});