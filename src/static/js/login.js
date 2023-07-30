document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;

    axios.post('http://localhost:3000/', {
        login: login,
        password: password,
    })
    .then(function (response) {
        if (response.data.redirect) {
            // Если есть, выполняем перенаправление
            window.location.href = response.data.redirect;
        }
    })
    .catch(function (error) {
        // Ловим ошибки

        if (error.response) {
            // Сервер вернул ответ с ошибкой (код ответа не в диапазоне 2xx)
            console.error('Response Error:', error.response.status, error.response.data);
        } else if (error.request) {
            // Запрос был отправлен, но нет ответа (например, нет соединения с сервером)
            console.error('Request Error:', error.request);
        } else {
            // Произошла ошибка при настройке запроса
            console.error('Error:', error.message);
        }
    });
});