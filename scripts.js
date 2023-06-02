const registerForm = document.forms.register;

document.getElementById('register-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = registerForm.name.value;
    const email =  registerForm.email.value;
    
    const userAlreadyExists = checkIfUserAlreadyExists(email);
    
    if(userAlreadyExists) {
        alert('Seu usuário já está em nossas bases de dados!');
        return;
    }
    
    const user = { name, email };
    
    saveUser(user);
    resetForm();

    alert('Dados cadastrados com sucesso!');
});

function saveUser(user) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userId = users.length + 1;
    
    users.push({
        id: userId,
        ...user
    });
    
    localStorage.setItem('users', JSON.stringify(users));
}

function checkIfUserAlreadyExists(email) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.find(user => user.email === email);
}

function resetForm() {
    registerForm.reset();
}