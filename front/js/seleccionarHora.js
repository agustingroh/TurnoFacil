function seleccionar_turno(){
    console.log("seleccionado");
}

document.querySelector(".day").addEventListener("click", seleccionar_turno());

document.querySelector("#botonVolver").addEventListener("click",()=>{
    const myurl= window.location.href;
    let url = new URL(myurl);
    let params = new URLSearchParams(url.search);
    let idMed = params.get('idMed')
    window.location.href=`../html/visualizarHorariosMedico.html?idMed=${idMed}`
});