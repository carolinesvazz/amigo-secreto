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