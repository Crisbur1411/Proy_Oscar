function validateLogin() {
    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;

    // Validación básica (puedes ajustar esto según tus necesidades)
    if (email === "c@d.com" && password === "123") {
        // Muestra la ventana modal
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('modal').style.display = 'block';
        
        return false; // Devuelve false para evitar el envío del formulario
    } else {
        // Si las credenciales son incorrectas, muestra un mensaje de error
        alert("Credenciales incorrectas. Inténtalo de nuevo.");
        return false; // Devuelve false para evitar el envío del formulario
    }
}

function cerrarModal() {
    // Cierra la ventana modal y el fondo oscuro después de 5 segundos
    document.getElementById('overlay').style.display = 'none';
        document.getElementById('modal').style.display = 'none';

    document.getElementById('newModal').style.display = 'block';
    setTimeout(function() {
        document.getElementById('newModal').style.display = 'none';
        window.location.href = ".//HTML/conexion.html";
    }, 3000); // 5000 milisegundos = 5 segundos
}



