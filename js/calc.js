function insereNumeroNoVisor(botao,visor) {
    if(botao.value == "+" || botao.value == "-" || botao.value == "*" || botao.value == "/"){
        if(botao.value == "+" || botao.value == "-" || botao.value == "*" || botao.value == "/"){
            visor.value += botao.value;
        }
    }
}

function resultadoDasOperacoes(visor){
   visor.value  = eval(visor.value);
}