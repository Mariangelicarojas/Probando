function verificarRespuesta(paginaRedireccion) {
    const respuesta = confirm("¿Estás segura que vas a comer CARNE DE VERDAD??");
    
    if (respuesta) {
        // Redirige a la página indicada
        window.location.href = paginaRedireccion;
    } else {
        // Muestra un mensaje en el elemento con id "resultado"
        document.getElementById("resultado").innerHTML = "Te Amo";
    }
}

function mueveElBoton() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const newWidth = Math.random() * width;
    const newHeight = Math.random() * height;

    const btnNo = document.getElementById("btnNo");
    btnNo.style.position = "absolute";
    btnNo.style.left = newWidth + "px";
    btnNo.style.top = newHeight + "px";            
}
