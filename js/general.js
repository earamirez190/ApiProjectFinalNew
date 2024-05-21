function login() {
    // Obtener los valores de usuario y contraseña del formulario
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;

    // Objeto con los datos del usuario
    const datosUsuario = {
        username: usuario,
        password: contraseña
    };

    // Realizar la llamada a la API REST
    fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosUsuario)
    })
    .then(response => {
        // Verificar si la respuesta es exitosa
        if (response.ok) {
            console.log('Autenticación exitosa');
            // Redireccionar al home.html
            window.location.href = 'home.html';
        } else {
            // Manejar casos de error de autenticación
            console.error('Error de autenticación');
        }
    })
    .catch(error => {
        // Manejar errores de red u otros errores
        console.error('Error de red:', error);
    });
}

// Función para obtener el valor de una cookie por su nombre
function getCookie(name) {
    alert("hola getCookie");
    const cookieArray = document.cookie.split(';');
    alert(cookieArray);
    for (let i = 0; i < cookieArray.length; i++) {
        const cookiePair = cookieArray[i].split('=');
        if (cookiePair[0].trim() === name) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}


function verificarToken(token) {
    // Realizar la llamada a la API REST para verificar el token
    fetch('http://localhost:8080/api/user', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => {
        // Verificar si la respuesta es exitosa
        if (response.ok) {
            console.log('Autenticación exitosa');
        } else {         
            console.error('Error al verificar el token');
        }
    })
    .catch(error => {
        console.error('Error de red:', error);
    });
}
