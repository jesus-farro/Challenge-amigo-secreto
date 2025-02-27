// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let vacio = '';

function campoVacio (){
    document.getElementById('amigo').value = '';
}

function condicionesIniciales (){
    campoVacio();

}

function agregarAmigo (){
    let candidatoAmigo = document.getElementById('amigo').value;
    if (candidatoAmigo === vacio){
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(candidatoAmigo);
    }
    campoVacio();
    console.log(amigos); //para gestionar el arreglo
    arregloAmigos()
}

function arregloAmigos () {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    let ultimoElemnto = amigos.length-1;
    let nombresAmigos = '';
    
    for (var contador = 0; contador <= ultimoElemnto; contador++) {
        nombresAmigos = `${nombresAmigos} <li> ${amigos[contador]} </li>`;
    }
    console.log(nombresAmigos); // Para gestionar variable de la lista de amigos
    elementoTexto('listaAmigos', nombresAmigos );
}

function elementoTexto (elemento,texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
}

