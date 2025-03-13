let nomeS = [];
listaAmigos(nomeS);

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value
    if (amigo === '') {
        alert("Por favor, insira um nome!");
        return;
    }
    else {
        nomeS.push(amigo);
        listaAmigos();
        document.getElementById('amigo').value = '';
    }
}

function listaAmigos() {
    let lista = document.getElementById('listaAmigos'); 
    lista.innerHTML = '';
    nomeS.forEach(amigo => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (nomeS.length === 0) {
        alert('Não há amigos disponíveis');
        return;
}
    else {
        let indiceAleatorio = Math.floor(Math.random() * nomeS.length);
        let amigoSorteado = nomeS[indiceAleatorio];
        document.getElementById('resultado').innerHTML = amigoSorteado;
        resultado.innerHTML = `O amigo sorteado foi: ${amigoSorteado}`;
    }
       let limparLista = document.getElementById("listaAmigos");
       limparLista.innerHTML = "";
       nomeS = [];
}