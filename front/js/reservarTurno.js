

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
        id:1,
        especialidad:"medico clinico"
    },
    {
        id:1,
        especialidad:"nutricionista"
    },
    {
        id:1,
        especialidad:"oftalmologo"
    }
];


document.getElementById("expandirMedicos").addEventListener("click",mostrarMedicos);

function mostrarMedicos(){
    // const respuesta= await fetch ("http://localhost:8080/medicos");
    // const medicos=await respuesta.json();
    for(let i=0; i<medicos.length;i++){
       document.querySelector(".sugerenciasMedicos").innerHTML+='<div class="medicoIndividual">'+
                    '<div class="ficha"> '+
                        '<img src="../img/dr'+[i+1]+'.jpeg" alt="">'+
                        '<div>'+
                            '<h3>Dr '+ medicos[i].nombre + '</h3>'+
                            '<h4>'+medicos[i].especialidad+'</h4>'+
                        '</div>'+
                    '</div>'+
                '</div>'
       
    }
}

mostrarMedicos();

function mostrarEspecialidades(){
    // const respuesta= await fetch ("http://localhost:8080/especialidades");
    // const especialidades=await respuesta.json();
    for(let i=0; i<especialidades.length;i++){
        document.querySelector(".sugerenciasEspecialidad").innerHTML+= '<div class="fondoSugerencias">'
                                                                            + '<h3>'+ especialidades[i].especialidad+'</h3>'
                +'</div>'
    }
}

mostrarEspecialidades();

async function mostrarObrasSociales(){
    const respuesta= await fetch ("http://localhost:8080/os");
    const obrasSociales=await respuesta.json();
    for(let i=0; i<obrasSociales.length;i++){
        document.querySelector(".sugerenciasObraSocial").innerHTML+='<div class="fondoSugerencias">'+
                    '<h3>'+obrasSociales[i].nombre+'</h3>'+
                '</div>'
    }
}

mostrarObrasSociales();
