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
document.querySelector(".botonAplicar").addEventListener("click", redirigir);

let fechaDesde;
document.querySelector("#dateDesde").addEventListener("click", ()=>{
    fechaDesde=document.querySelector("#dateDesde").value;
});

document.querySelector("#dateHasta").addEventListener("click", ()=>{
    fechaHasta=document.querySelector("#dateHasta").value;
});


let turno=selected();



document.querySelector(".momentoDelDiaElegido").addEventListener("click", selected);


function selected(){
    let maniana=document.getElementById("maniana").checked;
    let tarde=document.getElementById("tarde").checked;
    if(maniana){
       console.log(document.getElementById("maniana").value); 
       return maniana;
    }else if(tarde){
        console.log(document.getElementById("tarde").value);
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
    window.location.href = "../html/prueba.html";
    // console.log("red"+fechaDesde)
    // console.log(fechaHasta)

    // if (fechaDesde & fechaHasta){
    //     window.location.href = "../html/prueba.html?fechaDesde="+fechaDesde + "?fechaHasta="+fechaHasta;
    // }
    // else if(fechaDesde & fechaHasta & turno){
    //     window.location.href = "../html/prueba.html?fechaDesde="+fechaDesde + "?fechaHasta="+fechaHasta + "?turno=" + turno;
    // }
}