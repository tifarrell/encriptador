function encriptar(){
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();
    
    // i = tomar letras mayúsculas y minúsculas
    // g = tomar en cuenta toda la línea o la oración
    // m = tome en cuenta múltiples líneas
    var textoEncriptado = frase.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    if (textoEncriptado.length != 0) {
        document.getElementById("textoEncriptado").value = textoEncriptado;
        document.getElementById("mensaje").innerHTML = "¡Texto encriptado con éxito!";
        document.getElementById("btnCopiar").disabled = false;
        document.getElementById("btnLimpiar").disabled = false;
        document.getElementById("imagen").src = "img/cerrado.png";
    } else {
        window.alert("Ingrese un texto por favor");
    }
}

function desencriptar(){
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();
    
    // i = tomar letras mayúsculas y minúsculas
    // g = tomar en cuenta toda la línea o la oración
    // m = tome en cuenta múltiples líneas
    var textoDesencriptado = frase.replace(/enter/img, "e");
    var textoDesencriptado = textoDesencriptado.replace(/ober/img, "o");
    var textoDesencriptado = textoDesencriptado.replace(/imes/img, "i");
    var textoDesencriptado = textoDesencriptado.replace(/ai/img, "a");
    var textoDesencriptado = textoDesencriptado.replace(/ufat/img, "u");

    if (textoDesencriptado.length != 0) {
        document.getElementById("textoEncriptado").value = textoDesencriptado;
        document.getElementById("mensaje").innerHTML = "¡Texto desencriptado con éxito!";
        document.getElementById("btnCopiar").disabled = false;
        document.getElementById("btnLimpiar").disabled = false;
        document.getElementById("imagen").src = "img/abierto.png";
    } else {
        window.alert("Ingrese un texto por favor");
    }    
}

function copiarTexto(){
    var contenido = document.querySelector("#textoEncriptado");
    contenido.select();
    document.execCommand("copy"); 
}

function limpiarTexto() {
    document.getElementById("textoEncriptado").value = "";
    //document.getElementsByName("textoEncriptado")[0].placeholder = "Escribe tu texto aquí";
    document.getElementById("mensaje").innerHTML = "Ningún mensaje fue encontrado.";
    document.getElementById("imagen").src = "img/muñeco.png";
    document.getElementById("btnCopiar").disabled = true;
    document.getElementById("btnLimpiar").disabled = true;
}

function check(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    // La tecla de retroceso para borrar y la de espacio son permitidas
    if (tecla == 8 || tecla == 32) {
        return true;
    }

    // Si se intentan escribir mayúsculas, números o carcteres especiales la alerta se pone en rojo  
    if (tecla < 97 || tecla > 122) {
        document.getElementById("alerta").style.color = "Red";
    } else {
        document.getElementById("alerta").style.color = "Black";
    }

    // Patrón de entrada, en este caso solo acepta letras minúsculas
    patron = /[a-z]/; // para aceptar números y letras: /[A-Za-z0-9]/
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}
