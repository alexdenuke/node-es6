import express from "express";
import bodyParser from 'body-parser';
import path from 'path';
import {requestTime, logger} from './middlewares.js';
import { pool } from './db.js';
import indexController from './controllers/adminController.js';
import adminRouter from './routes/adminRouter.js'
import indexRouter from './routes/indexRouter.js'; // импорт главного роутера
import {bcryptCheck} from './bcrypt.js';

const __dirname = path.resolve();
const PORT = 3000;
const app = express();

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`)
});

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

  app.use('/', adminRouter);
  app.use('/', indexRouter); // использование главного роутера

app.get('/features', (req, res) => {
    res.render('features', {title: 'Features Page!!!!!'})
})

app.use(express.static(path.resolve(__dirname, 'static')))

app.use(requestTime);
app.use(logger);






