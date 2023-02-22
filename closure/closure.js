function greeting() {
    let username = 'Pablo';

    function displayUsername() {
        return `Hola ${username}`;
    }

    return displayUsername;
}

const g = greeting();
console.log(g); //retornamos descripcion displayUsername
console.log(g()); //retornamos el console.log