import express from "express";
import bodyParser from 'body-parser';
import path from 'path';
import { requestTime, logger, requestLogger, catchError } from './middlewares/middlewares.js';
import indexController from './controllers/adminController.js';
import adminRouter from './routes/adminRouter.js';
import indexRouter from './routes/indexRouter.js';
import { bcryptCheck } from './bcrypt.js';
import cookieParser from 'cookie-parser';





const __dirname = path.resolve();
const PORT = 3000;
const app = express();

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`)
});

console.log('hi4');

// Настройки приложения
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'src/ejs'))

app.use(express.json());
app.use(cookieParser());
app.use(requestTime);
app.use(logger);
app.use(requestLogger);
app.use(catchError);

// Роутеры
app.use('/', indexRouter);
app.use('/', adminRouter);
// Общие мидлвари













// Статические файлы
app.use(express.static(path.resolve(__dirname, 'src/static')))







