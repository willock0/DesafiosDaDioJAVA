const prompt = require('prompt-sync')(); 

let nome = prompt('Qual seu nome ?');

function myname(nome){
    return (`${nome}`)
}


function verificadorDeIdade(idade){
    if(idade >= 18){
        console.log("Ok " + myname(nome) + ",você realmente é maior de idade")
    }else{
        console.log("Não, você não é maior de idade")
    }
}

verificadorDeIdade(20);