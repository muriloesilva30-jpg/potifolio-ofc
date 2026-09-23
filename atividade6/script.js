function site(){
    let nome;
    let result;
    let agora = new Date;

    nome = prompt("Qual é o seu nome?");
    result = window.document.getElementById('resultado');

    result.innerHTML = `<h3>Olá, ${nome}! É um prazer te conhcer! <br> O sistema me enviou a seguinte informação: <mark>${agora}</mark></h3>`;

}