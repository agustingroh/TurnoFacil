const myurl= window.location.href;
let url = new URL(myurl);
let params = new URLSearchParams(url.search);
let idmedico = params.get('idMed')
console.log("medico "+idmedico);


async function mostrarMedico(idmedico){
    const respuesta= await fetch (`http://localhost:8080/medicos/${idmedico}`);
    const medicos = await respuesta.json();
    document.querySelector(".medicoIndividual").innerHTML+=
    '<div class="ficha" id="med'+medicos.idmedico+'">'+
        // '<img src="../img/dr'+[0]+'.jpeg" alt="">'+
        '<div>'+
            '<h3>Dr '+ medicos.nombre + ' ' +  medicos.apellido +  '</h3>'+
        '</div>'+
    '</div>'+
'</div>'
}

mostrarMedico(idmedico);


let fechaDesde;
let fechaHasta;
let turnoManana;
let turnoTarde;


document.querySelector("#dateDesde").addEventListener("change",(params)=>{
   fechaDesde = document.querySelector("#dateDesde").value;
});

document.querySelector("#dateHasta").addEventListener("change",(params)=>{
    fechaHasta = document.querySelector("#dateHasta").value;
 });
 
 document.querySelector("#maniana").addEventListener("change",(params)=>{
    turnoManana = document.querySelector("#maniana").value;
    document.querySelector("#tarde").disabled=true;
  
 });
 document.querySelector("#tarde").addEventListener("change",(params)=>{
    turnoTarde = document.querySelector("#maniana").disabled=true;
 });



document.querySelector(".botonAplicar").addEventListener("click", redirigir);






document.querySelector(".momentoDelDiaElegido").addEventListener("click", selected);


function selected(){
    let maniana=document.getElementById("maniana").checked;
    let tarde=document.getElementById("tarde").checked;
    if(maniana){
       return maniana;
    }else if(tarde){
        return tarde;
    }  
}


async function mostrarHorariosMedico(idmedico){
    const respuesta= await fetch (`http://localhost:8080/medico/horarioatencion/${idmedico}`);
    const horarios= await respuesta.json();
    const calendario=document.querySelector(".calendario");
    Object.entries(horarios).forEach(([key,value])=>{ 
        if(key!="id_medico")
        calendario.innerHTML+='<div class="diasCalendario"><h3>'+key+' </h3><h4>'+value+'</h4></div>'});
    
}

mostrarHorariosMedico(idmedico);

function redirigir(){ 
    if(fechaDesde && fechaHasta && turnoManana==null & turnoTarde==null){
        window.location.href = "../html/turnosDisponibles.html";
    }
    else if(fechaDesde && fechaHasta && turnoManana){
        window.location.href = "../html/horariosManiana.html";
    }
    else{
        window.location.href = "../html/horariosTarde.html";
    }
}