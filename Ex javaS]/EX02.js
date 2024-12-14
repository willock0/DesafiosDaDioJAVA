const prompt = require('prompt-sync')(); 


function Media(){
let nota = parseInt(prompt('Digite a 1° nota: '));
let nota2 = parseInt(prompt('Digite a 2° nota: '));
let nota3 = parseInt(prompt('Digite a 3° nota: '));

let media = nota+nota2+nota3
media = media / 3

if(media < 5){
    console.log("reprovado" + media)
    } else if(media > 5 && media < 7){
        console.log("recuperação" + media)
    }else {
        console.log(media + "aprovado")
    }

}
Media()


