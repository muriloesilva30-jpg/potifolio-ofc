function estacao(){


    let mes = prompt("Digite o mês por extenso (ex: Setembro):")
    let mostrar = document.getElementById('resultado');
    computador = mes + estacao(dif * aleatorio);

    mes = mes.toUpperCase();
    
    mes = Number(prompt("Qual mês você quer saber a Estção do Ano?"));
    
    if(mes == 'JANEIRO' || mes == 'FEVEREIRO'){//O || SIGNIFICA "OU".
        
    }if(mes = Dezembro){
        mostrar.innerHTML = `<p>Você pensou em ${mes}, a estação desse mês é:<b>Verão</b>!</p>`
    }if(mes = Setembro){
        mostrar.innerHTML = `<p>Você escolheu: ${mes}, a Estação desse mês é: <b>Primavera</b>!</p>`;
    }if(mes = Junho){
        mostrar.innerHTML = `<p>Você escolheu: ${mes}, a Estação desse mês é: <b>Inverno</b>!</p>`;
    }if(mes = Março){
        mostrar.innerHTML = `<p>Você escolheu: ${mes}, a Estação desse mês é: <b>Outono</b>!</p>`;

    //O USUÁRIO INFORMA O MÊS POR EXTENSO E O SISTEMA INFOMA A ESTAÇÃO DAQUELE MÊS.
    }
}