"use strict";

//criando objetos

const usuario1 = {
    nomeUsuario : "rita-lee",
    senhaUsuario : "00000"
}

const usuario2 = {
    nomeUsuario : "ptt01",
    senhaUsuario : "12345"
}


usuario2,nomeUsuario = "Juquinha";


//Lista de usuários
let listaDeusuarios = [];
listaDeusuarios.push(usuario1);
listaDeusuarios.push(usuario2);
console.log(listaDeusuarios);

addEventListener("click", (evento)=>{
   
    let userInput = document.querySelector("#idUser");
    let passInput = document.querySelector("#idUser");
    
    
    if(evento.target.id == "btnSubmit"){

    try{

    
        listaDeusuarios.forEach((usuario)=>{

        
        if(userInput.value == usuario.nomeUsuario && passInput.value == usuario.senhaUsuario){
            throw "USUÁRIO VÁLIDO!";
        }
    });

    throw "USUÁRIO OU SENHA INCORRETOS!";
    
}catch(err){
    if(err == "USUÁRIO VÁLIDO!"){
        console.log("USUÁRIO VÁLIDO!")
    }else{
        console.log("USUÁRIO OU SENHA INCORRETOS!")
    }
}  
    }
});