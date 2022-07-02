const myurl= window.location.href;
let url = new URL(myurl);
let params = new URLSearchParams(url.search);
let idMedico = params.get('idMed')
let fechaDesde=params.get('fechaDesde');
let fechaHasta=params.get('fechaHasta');

document.addEventListener('DOMContentLoaded', function() {
    agregarDias(fechaDesde,fechaHasta, 8);
});

function agregarDias(fechaDesde,fechaHasta, dias){
    var desde = new Date(fechaDesde);
    var hasta=new Date(fechaHasta);
    desde.setDate(desde.getDate() + dias);
    hasta.setDate(hasta.getDate() + dias);
    let textoDesde=desde.toLocaleDateString();
    let textoHasta=hasta.toLocaleDateString();
    document.getElementById("proximaSemana").innerHTML="<p>Horarios Disponibles semana del "+ textoDesde+ " al " + textoHasta+"</p>";
    
}


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
