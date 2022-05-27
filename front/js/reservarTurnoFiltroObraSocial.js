
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
        especialidad:"Pediatra"
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


let obra_social=[
{
    id_os:0,
    nombre:"PAMI"
},
{
    id_os:1,
    nombre:"OSDE"
},
{
    id_os:2,
    nombre:"GALENO"
}

]

function mostrarMedicosporObraSocial(id_os){
     //const respuesta= await fetch ("http://localhost:8080/os/id_os");
     //console.log(respuesta);
     //const medicos=await respuesta.json();
    let contador=0;

    console.log(id_os);
    for(let i=0; i<medicos.length;i++){
        console.log(medicos[i].obraSocial)
        if (medicos[i].obraSocial == obra_social[id_os].nombre ){
           contador++;
            document.querySelector(".sugerenciasMedicosObraSocial").innerHTML+='<div class="medicoIndividual">'+
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
    console.log(contador);
}
let id_os=0;
mostrarMedicosporObraSocial(id_os);