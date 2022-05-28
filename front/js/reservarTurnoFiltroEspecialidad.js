
const myurl= window.location.href;
let url = new URL(myurl);
let params = new URLSearchParams(url.search);
let idEspe = params.get('idEspecialidad')
console.log(idEspe);

async function mostrarMedicosporEspecialidad(idEspe){
    const respuestaOs= await fetch ("http://localhost:8080/especialidades");
    const especialidades=await respuestaOs.json();
    const respuesta= await fetch ("http://localhost:8080/medicos");
    const medicos = await respuesta.json();
    let selectEspecialidad;
    for (let i=0; i<especialidades.length;i++){
        if (especialidades[i].id_espec==idEspe){
            selectEspecialidad=especialidades[i].nombre;
        }
    }
   let contador=0;
   console.log(selectEspecialidad);
    document.querySelector("#muestraFiltro").innerHTML= '<div class="info"><h2>Médicos por Especialidad: '
    + selectEspecialidad +' </h2></div>'
    let j=1;
   for(let i=0; i<medicos.length;i++){
        const respuesta= await fetch ("http://localhost:8080/medicos/"+j+"");
        j++;
        const medicoId = await respuesta.json();
            if ( medicoId.especialidades[0].nombre == selectEspecialidad){
                contador++;
                document.querySelector(".sugerenciasMedicosEspecialidad").innerHTML+='<div class="medicoIndividual" onClick=guardarMedico('+medicos[i].id_medico+')>'+
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

mostrarMedicosporEspecialidad(idEspe);


let med;
function guardarMedico(id){
    med=id;
    document.querySelector("#med"+id).classList.toggle("fichaSelected");
    console.log("medico "+ med);
    return med;
}

document.querySelector("#botonAplicar").addEventListener("click",redirigir);

function redirigir(){ 
        let idmedico=guardarMedico(med);
        window.location.href = "../html/visualizarHorariosMedico.html?idMed="+idmedico;
}