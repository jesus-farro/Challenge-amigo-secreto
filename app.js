// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let vacio = '';

function campoVacio (){
    document.getElementById('amigo').value = '';
}

function agregarAmigo (){
    let candidatoAmigo = document.getElementById('amigo').value;
    if (candidatoAmigo === vacio){
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(candidatoAmigo);
    }
    campoVacio();
    // console.log(amigos); //para gestionar el arreglo
    arregloAmigos()
}

function arregloAmigos () {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    let ultimoElemnto = amigos.length-1;
    
    for (var contador = 0; contador <= ultimoElemnto; contador++) {
        lista.innerHTML = `${lista.innerHTML} <li> ${amigos[contador]}  <button class="x" onclick="eliminarAmigo(${contador})"><img src="assets/x.png" alt="Eliminar amigo" width="20px" height="20px"></button></li>`;
    }
    // console.log(lista.innerHTML); // Para gestionar la lista de amigos
}

function eliminarAmigo(indice){
    amigos.splice(indice, 1);
    arregloAmigos();
}

function sortearAmigo() {
    if (amigos.length === 0){
        alert('Por favor, agrega el nombre de los amigos a sortear');
    } else {
        let numeroSorteado = Math.floor(Math.random()*amigos.length);
        // console.log(numeroSorteado); // Para gestionar el número sorteado
        let amigoSorteado = document.getElementById('listaAmigos');
        amigoSorteado.innerHTML = `El amigo secreto sorteado es: ${amigos[numeroSorteado]}`;
        document.getElementById('click').setAttribute('onclick','reinicio()');
        document.getElementById('click').innerHTML = 'Reiniciar Juego';
    }    
}

function reinicio(){
    document.getElementById('click').setAttribute('onclick',"sortearAmigo()");
    document.getElementById('click').innerHTML = '<img src="assets/play_circle_outline.png" alt="Ícono para sortear">Sortear amigo';
    campoVacio();
    amigos = [];
    let vaciarLista = document.getElementById('listaAmigos');
    vaciarLista.innerHTML = '';
}
