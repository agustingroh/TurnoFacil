const myurl= window.location.href;
let url = new URL(myurl);
let params = new URLSearchParams(url.search);
let idmedico = params.get('idMed')



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
let turnoTodo = "todo";

document.querySelector("#dateDesde").addEventListener("change",(params)=>{
   fechaDesde = document.querySelector("#dateDesde").value;
});

document.querySelector("#dateHasta").addEventListener("change",(params)=>{
    fechaHasta = document.querySelector("#dateHasta").value;
    
 });
 
 document.querySelector("#maniana").addEventListener("change",(params)=>{
    turnoManana = document.querySelector("#maniana").value;
    turnoTarde=null;
    turnoTodo=null;
  
 });
 document.querySelector("#tarde").addEventListener("change",(params)=>{
    turnoTarde = document.querySelector("#tarde").value;
    turnoManana=null;
    turnoTodo=null;
 });

 document.querySelector("#todo").addEventListener("change",(params)=>{
    turnoTodo = document.querySelector("#todo").value;
    turnoManana=null;
    turnoTarde=null;
 });



document.querySelector(".botonAplicar").addEventListener("click", ()=>{
    redirigir(idmedico);
});






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

 
async function estaDisponible(idMedico){
    const respuesta= await fetch (`http://localhost:8080/medico/disponibilidad/${idmedico}`);
    const disponibilidad= await respuesta.json();
    return disponibilidad;
} 

async function redirigir(idMedico){ 
    const disponibilidad= await estaDisponible(idMedico);
    if(disponibilidad){
        console.log(estaDisponible(idMedico));
        if(fechaDesde && fechaHasta){
            if( turnoTodo!=null){
                window.location.href = `../html/turnosDisponibles.html?idMed=${idMedico}`;
            }
            else if(turnoManana!=null){
                window.location.href = `../html/horariosManiana.html?idMed=${idMedico}`;
            }
            else{
                window.location.href = `../html/horariosTarde.html?idMed=${idMedico}`;
            }  
        }
        else{
            alert("seleccione fecha");
        }
    }else{
        window.location.href = `../html/turnosNoDisponibles.html?idMed=${idMedico}&fechaDesde=${fechaDesde}&fechaHasta=${fechaHasta}&todo=${turnoTodo}&maniana=${turnoManana}&tarde=${turnoTarde}`;
    }
}            
