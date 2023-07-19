

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();


    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;

    axios.post('http://localhost:3000/', {
        login: login,
        password: password,
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.error(error);
    });
});