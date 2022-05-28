const myurl= window.location.href;
let url = new URL(myurl);
let params = new URLSearchParams(url.search);
let idEspe = params.get('idEspecialidad');
let idObraSocial = params.get('idOS');

console.log("id especialidad: "+ idEspe);
console.log("id Obra Social: "+ idObraSocial); 

async function mostrarMedicosporEspObra(idEspe,idObraSocial){
    const respuestaEsp= await fetch ("http://localhost:8080/especialidades");
    const especialidades=await respuestaEsp.json();
    const respuesta= await fetch ("http://localhost:8080/medicos");
    const medicos = await respuesta.json();
    const respuestaOs= await fetch ("http://localhost:8080/os");
    const obrasSociales=await respuestaOs.json();

    let selectEspecialidad;
    for (let i=0; i<especialidades.length;i++){
        if (especialidades[i].id_espec==idEspe){
            selectEspecialidad=especialidades[i].nombre;
        }
    }

    let selectOS;
    for (let i=0; i<obrasSociales.length;i++){
        if (obrasSociales[i].id_os==idObraSocial){
            selectOS=obrasSociales[i].nombre;
        }
    }

   let contador=0;
   console.log("la especialidad seleccionada es: "+ selectEspecialidad);
   console.log("la obra social seleccionada es "+ selectOS);
    document.querySelector("#muestraFiltroEspObra").innerHTML= '<div class="info"><h2>Médicos por Especialidad: '
    + selectEspecialidad +' y Obra Social: '+selectOS +'</h2></div>'
    let j=1;
   for(let i=0; i<medicos.length;i++){
        const respuesta= await fetch ("http://localhost:8080/medicos/"+j+"");
        j++;
        const medicoId = await respuesta.json();
            if ( (medicoId.especialidades[0].nombre == selectEspecialidad) && ( medicoId.obrasSociales[0].nombre == selectOS)){
                contador++;
                document.querySelector(".sugerenciasMedicosEspObraSocial").innerHTML+='<div class="medicoIndividual" onClick=guardarMedico('+medicos[i].id_medico+')>'+
                '<div class="ficha" id="med'+medicos[i].id_medico+'">'+
                                '<img src="../img/dr'+[i+1]+'.jpeg" alt="">'+
                                '<div>'+
                                '<h3>Dr '+ medicos[i].nombre + ' ' +  medicos[i].apellido +  '</h3>'+
                                '</div>'+
                            '</div>'+
                        '</div>'
                }
            }
   console.log(contador);
}


mostrarMedicosporEspObra(idEspe,idObraSocial);

let med;
function guardarMedico(id){
    med=id;
    document.querySelector("#med"+id).classList.toggle("fichaSelected");
    console.log("id del medico "+ med);
    return med;
}

document.querySelector("#botonAplicar").addEventListener("click", redirigir);

function redirigir(){ 
        let idmedico=guardarMedico(med);
        window.location.href = "../html/visualizarHorariosMedico.html?idMed="+idmedico;
}