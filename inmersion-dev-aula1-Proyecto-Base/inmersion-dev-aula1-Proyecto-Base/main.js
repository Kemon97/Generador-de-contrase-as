let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");

function GenerarContrasena(){

    let numDigitado = parseInt(cantidad.value); 
    if (numDigitado < 6){
        alert("Debes ingresar más de 6 carácteres. Por favor intenta de nuevo");
    }
}










