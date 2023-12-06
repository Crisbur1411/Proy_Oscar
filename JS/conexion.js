function validateLogin() {
    var Usuario = document.getElementById("UsuInput").value;
    var pass = document.getElementById("passInput").value;
    var Puerto = document.getElementById("PuertoInput").value;
    var Host = document.getElementById("HostInput").value;

    // Validación básica (puedes ajustar esto según tus necesidades)
    if (Usuario === "root" && pass === "123" && Puerto === "3306" && Host ==="localhost") {
        // Muestra la ventana modal
        document.getElementById('newModal').style.display = 'block';
        setTimeout(function() {
            document.getElementById('newModal').style.display = 'none';
            document.getElementById('overlay').style.display = 'block';
            document.getElementById('modal').style.display = 'block';
        }, 3000); 


    
        
        return false; // Devuelve false para evitar el envío del formulario
    } else {
        // Si las credenciales son incorrectas, muestra un mensaje de error
        alert("Datos incorrectos, Porfavor vulve a intentarlo");
        return false; // Devuelve false para evitar el envío del formulario
    }
}

function cerrarModal() {
    // Cierra la ventana modal y el fondo oscuro después de 5 segundos
    document.getElementById('overlay').style.display = 'none';
        document.getElementById('modal').style.display = 'none';
        window.location.href = "../HTML/Principal.html";


}



