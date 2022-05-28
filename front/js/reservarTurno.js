
async function mostrarMedicos(){
     const respuesta= await fetch ("http://localhost:8080/medicos");
     const medicos = await respuesta.json();
    for(let i=0; i<medicos.length;i++){
        console.log( '<div class="ficha" id="med'+medicos[i].id_medico+'">');
       document.querySelector(".sugerenciasMedicos").innerHTML+='<div class="medicoIndividual" onClick=guardarMedico('+medicos[i].id_medico+')>'+
                    '<div class="ficha" id="med'+medicos[i].id_medico+'">'+
                        '<img src="../img/dr'+[i+1]+'.jpeg" alt="">'+
                        '<div>'+
                            '<h3>Dr '+ medicos[i].nombre + ' ' +  medicos[i].apellido +  '</h3>'+
                        '</div>'+
                    '</div>'+
                '</div>'
       
    }
}

mostrarMedicos();

let med;
function guardarMedico(id){
    med=id;
    document.querySelector("#med"+id).style.background="#995f4e";
    console.log("medico "+ med);
    return med;
}


async function mostrarEspecialidades(){
    const respuesta= await fetch ("http://localhost:8080/especialidades");
    const especialidades = await respuesta.json();
    for(let i=0; i<especialidades.length;i++){
        document.querySelector(".sugerenciasEspecialidad").innerHTML+= '<div class="fondoSugerencias" id="esp'+especialidades[i].id_espec+'" onClick=guardarEspecialidades('+especialidades[i].id_espec+')>'
                                                                            + '<h3>'+ especialidades[i].nombre+'</h3>'
                +'</div>'
    }
}

mostrarEspecialidades();

let esp;
function guardarEspecialidades(id){
    esp=id;
    document.querySelector("#esp"+id).style.background="#995f4e";
    console.log("esp "+ esp);
    return esp;
}


async function mostrarObrasSociales(){
    const respuesta= await fetch ("http://localhost:8080/os");
    const obrasSociales=await respuesta.json();
    for(let i=0; i<obrasSociales.length;i++){
        document.querySelector(".sugerenciasObraSocial").innerHTML+='<div class="fondoSugerencias" id="os' + obrasSociales[i].id_os+ '" onClick=guardarObrasSociales('+obrasSociales[i].id_os+')>'+
                    '<h3>'+obrasSociales[i].nombre+'</h3>'+
                '</div>'       
    }
}

mostrarObrasSociales();

let obrasSocial;
function guardarObrasSociales(id){
   obrasSocial=id;
   document.querySelector("#os"+id).style.background="#995f4e";
   console.log(obrasSocial);
   return obrasSocial;
}


document.querySelector("#botonAplicar").addEventListener("click", redirigir);


function redirigir(){ 
    let idmedico=guardarMedico(med);
    let idespecialidad=guardarEspecialidades(esp);
    window.location.href = "../html/visualizarHorariosMedico.html?idMed="+idmedico+"&idEspecialidad="+idespecialidad+ "&idOS=" + guardarObrasSociales(obrasSocial);
}

