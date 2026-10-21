function estacao(){
    let mes = prompt("Digite o mês por extenso (ex: Setembro):")
    let mostrar = document.getElementById('resultado');

    mes = mes.toUpperCase();
    
    if(mes == 'DEZEMBRO' || mes == 'FEVEREIRO' || mes == 'MARÇO'){//O || SIGNIFICA "OU".
        mostrar.innerHTML = `<p>A estação no mês de ${mes} é VERÃO</p>`
    }
    if(mes == 'MARÇO' || mes == 'ABRIL' || mes == 'MAIO'){//O || SIGNIFICA "OU".
        mostrar.innerHTML = `<p>A estação no mês de ${mes} é OUTONO</p>`
    }
    if(mes == 'JUNHO' || mes == 'JULHO' || mes == 'AGOSTO'){//O || SIGNIFICA "OU".
        mostrar.innerHTML = `<p>A estação no mês de ${mes} é INVERNO</p>`
    }
    if(mes == 'SETEMBRO' || mes == 'OUTUBRO' || mes == 'NOVEMBRO'){//O || SIGNIFICA "OU".
        mostrar.innerHTML = `<p>A estação no mês de ${mes} é PRIMAVERA</p>`
    }
    //O USUÁRIO INFORMA O MÊS POR EXTENSO E O SISTEMA INFOMA A ESTAÇÃO DAQUELE MÊS.
    
}