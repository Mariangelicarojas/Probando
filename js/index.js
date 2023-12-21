function accionParaCuandoEllaDigaQueSi() {
    alert("Vamos a comerrr HAMBURGUESA CARNIVORAAA")
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

function accionParaCuandoEllaDigaQueSi() {
    const respuesta = confirm("¿Estas segura que vas a comer CARNE DE VERDAD??");
    if (respuesta){
        window.location.href = "opcionsi.html";
    }else{
        alert("Te Amo")
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
