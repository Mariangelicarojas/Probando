function accionParaCuandoEllaDigaQueSi() {
    const resultadoElemento = document.getElementById("resultado");

    const respuesta = confirm("¿Estás segura que vas a comer CARNE DE VERDAD??");
    if (respuesta){
        resultadoElemento.innerHTML = "¡Perfecto! Disfrutemos de la hamburguesa carnivora juntos.";
    } else {
        resultadoElemento.innerHTML = "Te Amo";
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
