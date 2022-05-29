function seleccionar_turno(){
    console.log("seleccionado");
    document.querySelector().classList.toggle("fichaSelected");
}

document.querySelector(".day").addEventListener("click", seleccionar_turno);