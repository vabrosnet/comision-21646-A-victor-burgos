import express from 'express';
import morgan from 'morgan';
import 'dotenv/config';
import { startDb } from './src/database/database.js'

const app = express();

//settings
const port = process.env.PORT;

//middlewares
app.use(morgan('dev'));


//Server listening
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    startDb();
})

// // export default app;
