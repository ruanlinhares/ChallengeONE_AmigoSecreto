//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const amigos = [];

function adicionarAmigo(){
    
    //
    let nome = document.getElementById('amigo').value;
    
    //adiciona nomes digitados a um array, exibe no console e no campo listaAmigos
    amigos.push(nome + "<br>");
    console.log(amigos);
    document.getElementById('listaAmigos').innerHTML = amigos.join('');
    
    //troca a cor do texto para preto
    let nomecolor = document.getElementById('listaAmigos');
    nomecolor.style.color = 'black';
}

function sortearAmigo(){
    //troca a cor do texto para verde claro
    let elemento = document.getElementById('listaAmigos');
    elemento.style.color = 'Lightgreen';

    //faz o calculo do sorteio
    let numeroAleatorio = parseInt(Math.random() * amigos.length);

    //insere o resultado do sorteio no html para mostrar na tela
    document.getElementById('listaAmigos').innerHTML = "Seu amigo secreto é " + amigos[numeroAleatorio];

    //Esvazia o array
    for(let i = amigos.length; i > 0; i--){
        amigos.pop();
    }
}
