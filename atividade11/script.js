function horas(){
    let agora = new Date;
    let hora = agora.getHours();
    let min = agora.getMinutes();
    let sec = agora.getSeconds();

    let mostrar = document.getElementById('resultado');

    mostrar.innerHTML = `<p>Agora são ${hora} horas e ${min} minutos</p>`;

    if(sec >= 20 && sec <=30){
        mostrar.innerHTML = `<p>Agora são ${hora} horas e ${min} minutos</p>;
                            <img src="https://www.reddit.com/r/FilosofiaBAR/comments/1nknqo3/o_que_significa_esse_meme_reflexivo_ai_de_todos/"></img>`;
    }
}