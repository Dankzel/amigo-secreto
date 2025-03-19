let listaAmigos = [];

function agregarAmigo() {  
    let inputNombre = document.getElementById("nombreAmigo"); 
    let nombre = inputNombre.value.trim(); 

    if (nombre === "") { 
        alert("Por favor, inserte un nombre.");
        return;
    }

    listaAmigos.push(nombre); 
    inputNombre.value = ""; 

    mostrarListaAmigos(); // Actualiza la lista en la pantalla
}

function mostrarListaAmigos() {
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = ""; 

    for (let amigo of listaAmigos) { 
        let li = document.createElement("li"); 
        li.textContent = amigo;
        listaHTML.appendChild(li);
    }
}

function sortearAmigo() {
    if (listaAmigos.length === 0) { 
        alert("La lista está vacía. Agrega amigos antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];

    document.getElementById("resultadoSorteo").innerHTML = `🎉 Amigo secreto: <strong>${amigoSorteado}</strong> 🎉`;
}
