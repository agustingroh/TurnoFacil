

let medicos=[
    {
        id:1,
        nombre: "Maria Gonzalez",
        especialidad:"Pediatra",
        obraSocial:"PAMI"
    },
    {
        id:2,
        nombre: "Tomás Gonzalez",
        especialidad:"Pediatra",
        obraSocial:"PAMI"
    },
    {
        id:3,
        nombre: "Juan Gonzalez",
        especialidad:"Pediatra",
        obraSocial:"PAMI"
    },
    {
        id:4,
        nombre: "Jorgelina Perez",
        especialidad:"Pediatra",
        obraSocial:"PAMI"
    }

];

let especialidades=[
    {
        id:1,
        especialidad:"pediatra"
    },
    {
        id:2,
        especialidad:"medico clinico"
    },
    {
        id:3,
        especialidad:"nutricionista"
    },
    {
        id:4,
        especialidad:"oftalmologo"
    }
];


//document.getElementById("expandirMedicos").addEventListener("click",mostrarMedicos);

function mostrarMedicos(){
    // const respuesta= await fetch ("http://localhost:8080/medicos");
    // const medicos=await respuesta.json();
    for(let i=0; i<medicos.length;i++){
        console.log( '<div class="ficha" id="med'+medicos[i].id+'">');
       document.querySelector(".sugerenciasMedicos").innerHTML+='<div class="medicoIndividual" onClick=guardarMedico('+medicos[i].id+')>'+
                    '<div class="ficha" id="med'+medicos[i].id+'">'+
                        '<img src="../img/dr'+[i+1]+'.jpeg" alt="">'+
                        '<div>'+
                            '<h3>Dr '+ medicos[i].nombre + '</h3>'+
                            '<h4>'+medicos[i].especialidad+'</h4>'+
                        '</div>'+
                    '</div>'+
                '</div>'
       
    }
}

// function selected(){
//     document.querySelector("#medIndivual").style.background="green";
// }
mostrarMedicos();

let med;
function guardarMedico(id){
    med=id;
    document.querySelector("#med"+id).style.background="#995f4e";
    console.log("medico "+ med);
    return med;
}


function mostrarEspecialidades(){
    // const respuesta= await fetch ("http://localhost:8080/especialidades");
    // const especialidades=await respuesta.json();
    for(let i=0; i<especialidades.length;i++){
        document.querySelector(".sugerenciasEspecialidad").innerHTML+= '<div class="fondoSugerencias" id="esp'+especialidades[i].id+'" onClick=guardarEspecialidades('+especialidades[i].id+')>'
                                                                            + '<h3>'+ especialidades[i].especialidad+'</h3>'
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
