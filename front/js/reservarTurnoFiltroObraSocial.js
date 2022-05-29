
const myurl= window.location.href;
let url = new URL(myurl);
let params = new URLSearchParams(url.search);
let id_os = params.get('idOS');// 'chrome-instant'

console.log("id de la obra social: "+id_os);

async function mostrarMedicosporObraSocial(id_os){
     const respuestaOs= await fetch ("http://localhost:8080/os");
     const obrasSociales=await respuestaOs.json();
     const respuesta= await fetch ("http://localhost:8080/medicos");
     const medicos = await respuesta.json();
     let selectOS;
     for (let i=0; i<obrasSociales.length;i++){
         if (obrasSociales[i].id_os==id_os){
             selectOS=obrasSociales[i].nombre;
         }
     }
     let contador=0;

    console.log("obra social seleccionada: "+selectOS);
    document.querySelector("#muestraFiltroObra").innerHTML= '<div class="info"><h2>Médicos por Obra Social: '
    + selectOS +'</h2></div>'
    let j=1;
    for(let i=0; i<medicos.length;i++){
        const respuesta= await fetch ("http://localhost:8080/medicos/"+j+"");
        j++;
        const medicoId = await respuesta.json();
        if ( medicoId.obrasSociales[0].nombre == selectOS){
            contador++;
            document.querySelector(".sugerenciasMedicosObraSocial").innerHTML+='<div class="medicoIndividual" onClick=guardarMedico('+medicos[i].id_medico+')>'+
            '<div class="ficha" id="med'+medicos[i].id_medico+'">'+

                            '<div>'+
                                '<h3>Dr '+ medicos[i].nombre + '</h3>'+
                            '</div>'+
                        '</div>'+
                    '</div>'
            }
    }
    console.log(contador);
}

mostrarMedicosporObraSocial(id_os);

let med;
function guardarMedico(id){
    med=id;
    document.querySelector("#med"+id).classList.toggle("fichaSelected");
    //document.querySelector("#med"+id).style.background="#995f4e";
    console.log("medico "+ med);
    return med;
}

document.querySelector("#botonAplicar").addEventListener("click",redirigir);

function redirigir(){
    let idmedico=guardarMedico(med); 
    window.location.href = "../html/visualizarHorariosMedico.html?idMed="+idmedico;
}