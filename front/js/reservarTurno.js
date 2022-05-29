
async function mostrarMedicos(){
     const respuesta= await fetch ("http://localhost:8080/medicos");
     const medicos = await respuesta.json();
    for(let i=0; i<medicos.length;i++){
        console.log( '<div class="ficha" id="med'+medicos[i].id_medico+'">');
       document.querySelector(".sugerenciasMedicos").innerHTML+='<div class="medicoIndividual" onClick=guardarMedico('+medicos[i].id_medico+')>'+
                    '<div class="ficha" id="med'+medicos[i].id_medico+'">'+                       
                        '<div>'+
                            '<h3>Dr '+ medicos[i].nombre + ' ' +  medicos[i].apellido +  '</h3>'+
                        '</div>'+
                    '</div>'+
                '</div>'
       
    }
}

mostrarMedicos();

let med=null;
function guardarMedico(id){
    if (id!=null){
        desmarcarEspecialidades();
        desmarcarObrasSociales();
        const medicos = document.querySelectorAll(".ficha");
        medicos.forEach((m) => {
            m.classList.add("noSelected");
            m.classList.remove("fichaSelected");
        });
        document.querySelector("#med" + id).classList.add("fichaSelected");
        document.querySelector("#med" + id).classList.remove("noSelected");
        med = id;
    }
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

let esp=null;
function guardarEspecialidades(id){
    desmarcarMedicos();
    if (id!=null){
        const espec = document.querySelectorAll(".fondoSugerencias");
        espec.forEach((e)=>{
                e.classList.add("noSelected");
                e.classList.remove("fichaSelectedEsp");
        });
        document.querySelector("#esp"+id).classList.add("fichaSelectedEsp");
        document.querySelector("#esp"+id).classList.remove("noSelected");
        esp=id;
    }


    return esp;
}


async function mostrarObrasSociales(){
    const respuesta= await fetch ("http://localhost:8080/os");
    const obrasSociales=await respuesta.json();
    for(let i=0; i<obrasSociales.length;i++){
        document.querySelector(".sugerenciasObraSocial").innerHTML+='<div class="fondoSugerenciasObraSocial" id="os' + obrasSociales[i].id_os+ '" onClick=guardarObrasSociales('+obrasSociales[i].id_os+')>'+
                    '<h3>'+obrasSociales[i].nombre+'</h3>'+
                '</div>'       
    }
}

mostrarObrasSociales();

let obrasSocial=null;
function guardarObrasSociales(id){
    desmarcarMedicos();
    if(id!=null){
        const obrasSociales = document.querySelectorAll(".fondoSugerenciasObraSocial");
        obrasSociales.forEach((os)=>{
            os.classList.add("noSelected");
            os.classList.remove("fichaSelectedOB");
        });
        document.querySelector("#os"+id).classList.add("fichaSelectedOB");
        document.querySelector("#os"+id).classList.remove("noSelected");
        obrasSocial=id;
    }
   return obrasSocial;
}

function desmarcarMedicos(){
    const medicos = document.querySelectorAll(".ficha");
    medicos.forEach((m)=>{
        m.classList.add("noSelected");
        m.classList.remove("fichaSelected");
    });
    med=null;
}

function desmarcarObrasSociales(){
    const obrasSociales = document.querySelectorAll(".fondoSugerenciasObraSocial");
    obrasSociales.forEach((os)=>{
        os.classList.add("noSelected");
        os.classList.remove("fichaSelectedOB");
    });
    obrasSocial = null;
}

function desmarcarEspecialidades(){
    const espec = document.querySelectorAll(".fondoSugerencias");
    espec.forEach((e)=>{
        e.classList.add("noSelected");
        e.classList.remove("fichaSelectedEsp");
    });
    esp = null;
}


document.querySelector("#botonAplicar").addEventListener("click", redirigir);


function redirigir(){ 
    let idmedico=guardarMedico(med);
    let idespecialidad=guardarEspecialidades(esp);
    let idObraSocial=guardarObrasSociales(obrasSocial);
    console.log(idespecialidad);
    console.log(idmedico);
    console.log(idObraSocial);
    if (idespecialidad == null & idObraSocial==null){
        window.location.href = "../html/visualizarHorariosMedico.html?idMed="+idmedico;
    }
    if (idespecialidad !=null & idObraSocial==null & idmedico==null){
        window.location.href = "../html/visualizarPorEspecialidad.html?idMed="+idmedico+"&idEspecialidad="+idespecialidad+ "&idOS=" +idObraSocial;
    }
    if (idespecialidad == null & idObraSocial != null & idmedico == null){
        window.location.href = "../html/visualizarPorObraSocial.html?idMed="+idmedico+"&idEspecialidad="+idespecialidad+ "&idOS=" +idObraSocial;
    }
    if (idespecialidad != null & idObraSocial != null & idmedico == null){
        window.location.href = "../html/visualizarPorEspObra.html?idEspecialidad="+idespecialidad+ "&idOS=" +idObraSocial;
    }
}

