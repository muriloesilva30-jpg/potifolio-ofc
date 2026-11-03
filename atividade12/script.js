function desafio(){
let nome1;
let nome2;
let nome3;
let soma;
let jogador;

    nome1 = Number(prompt("digite o primeiro nome"));
    nome2 = Number(prompt("digite o segundo nome"));
    nome3 = Number(prompt("digite o terceiro nome"));

    soma = nome1 + nome2 + nome3;

    alert("Pessoas que estâo no primeiro time: " + nome1 + nome2 );

    if(jogador = nome1){
        mostrar.innerHTML = `<p>Primeiro nome ${jogador} </p>`;
    } else if(jogador = nome2){
        mostrar.innerHTML = `<p>Segundo nome ${jogador}</p>`;
    } else if(jogador = nome3){
        mostrar.innerHTML =`<p>Terceiro nome ${jogador}</p>`;
    }
}
