const myurl= window.location.href;
let url = new URL(myurl);
let params = new URLSearchParams(url.search);
let idMedico = params.get('idMed')
let fechaDesde=params.get('fechaDesde');
let fechaHasta=params.get('fechaHasta');
let turnoTodo=params.get('todo');
let turnoManana=params.get('maniana');
let turnoTarde=params.get('tarde');
console.log(" todo "+turnoTodo);
console.log(" mañana "+ turnoManana);
console.log("tarde "+turnoTarde);
document.querySelector("#esteboton").addEventListener("click",(idMedico)=>{

    if(fechaDesde && fechaHasta){
        console.log(turnoTarde);
        console.log(" mañana "+ turnoManana);
        console.log("todo "+turnoTodo);

        if( turnoTodo!=null && (turnoTarde==="null" ||turnoTarde==="undefined") && (turnoManana==="null" ||turnoManana==="undefined")){
            console.log("entra todo")
            console.log(turnoTarde);
            console.log(" mañana "+ turnoManana);
            console.log("todo "+turnoTodo);
    
            window.location.href = `../html/visualizarProximaSemana.html?idMed=${idMedico}&fechaDesde=${fechaDesde}&fechaHasta=${fechaHasta}`;
        }
        else if(turnoManana!=null &&(turnoTodo==="null" ||turnoTodo==="undefined")&& (turnoTarde==="null" ||turnoTarde==="undefined")){
            console.log("entra mañana")
            console.log(turnoTarde);
            console.log(" mañana "+ turnoManana);
            console.log("todo "+turnoTodo);
    
            window.location.href =`../html/horariosManianaProximaSemana.html?idMed=${idMedico}&fechaDesde=${fechaDesde}&fechaHasta=${fechaHasta}`;
        }
       else if(turnoTarde!=null){
            console.log("entra tarde")
            console.log(turnoTarde);
            console.log(" mañana "+ turnoManana);
            console.log("todo "+turnoTodo);
    
            window.location.href =`../html/horariosTardeProximaSemana.html?idMed=${idMedico}&fechaDesde=${fechaDesde}&fechaHasta=${fechaHasta}`;
        }    
    }    
});
