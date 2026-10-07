/*variáveis para o jogo*/
let mostrar = document.getElementById('resultado');
let computador = 0;
let jogador = 0;
/*as linhas de abaixo são para gerar um número aleatório*/
let min = 1;
let max = 100;
let dif = max - min;
let aleatorio = Math.random();
computador = min + Math.trunc(dif * aleatorio);

let cont_palpites = 0;

function jogar(){
    jogador = Number(prompt("Qual é o seu palpite?"));
    
    if(jogador < computador){
        mostrar.innerHTML = `<p>Você pensou em ${jogador}, meu número é <b>MAIOR</b>!</p>`;
    } else if(jogador > computador){
        mostrar.innerHTML = `<p>Você pensou em ${jogador}, meu número é <b>MENOR</b>!</p>`;
    } else if(jogador == computador){
        mostrar.innerHTML =`<p><b>PARABÉNS!!!</b>Você acertou! Eu tinha pensado no número ${jogador} ,com` 
        
    }else {
        cont_palpites++;
        let mostrar = document.getElementById('resultado');
        mostrar.innerHTML = `Palpites: ${cont_palpites}</p>`

    }
}