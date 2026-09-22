function calcular(){
    let nota1trim = Number(prompt("Digite a Nota do primeiro Trimestre:"));
    let nota2trim = Number(prompt("Digite a Nota do segundo Trimestre:"));

    let resultado = 180-(nota1trim+nota2trim);
    

    if(resultado <= 0){
        alert("Parabéns! Você já está aprovado por nota!!!")
    } else {
        alert("Você precisa de " + resultado + " para ser aprovado.");
    }
}