let myName = document.getElementById('name');
let myEmail = document.getElementById('email');

document.querySelector('button').addEventListener('click', () => {
    var users = JSON.parse(localStorage.getItem('users'));

    if(users == null) 
        users = [];

    var user = {
        name: myName.value,
        email: myEmail.value,
    }

    users.push(user);

    localStorage.setItem('users', JSON.stringify(users));
})