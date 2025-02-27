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
    
    for (var contador = 0; contador <= ultimoElemnto; contador++) {
        lista.innerHTML = `${lista.innerHTML} <li> ${amigos[contador]} </li>`;
    }
    console.log(lista.innerHTML); // Para gestionar la lista de amigos
}

function sortearAmigo() {
    if (amigos.length === 0){
        alert('Por favor, agrega el nombre de los amigos a sortear');
    } else {
        let numeroSorteado = Math.floor(Math.random()*amigos.length);
        console.log(numeroSorteado);
        let amigoSorteado = document.getElementById('listaAmigos');
        amigoSorteado.innerHTML = `El amigo secreto sorteado es: ${amigos[numeroSorteado]}`;
    }
    
}

