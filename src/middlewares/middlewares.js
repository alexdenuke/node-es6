import colors from 'colors';

export function requestTime(req, res, next) {
    req.requestTime = Date.now();
    next();
}

export function logger(req, res, next) {
    console.log(colors.bgGreen.black(`Req.time: ${req.requestTime}`))
    next();
}


export function requestLogger(req, res, next) {
    console.log('Received request:', req.method, req.url);
    next();
}

export function catchError(err, req, res, next) {
    console.error('Error:', err); // Выводим ошибку в консоль
    res.status(500).send('Internal Server Error'); // Отправляем ответ с кодом 500 для клиента
}

