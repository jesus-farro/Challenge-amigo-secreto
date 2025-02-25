// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let vacio = '';
function agregarAmigo (){
    let candidatoAmigo = document.getElementById('amigo').value;
    if (candidatoAmigo === vacio){
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(candidatoAmigo);
    }
    campoVacio();
    console.log(amigos);
}

function campoVacio (){
    document.getElementById('amigo').value = '';
}

function condicionesIniciales (){
    campoVacio();

}

// console.log(amigos);
