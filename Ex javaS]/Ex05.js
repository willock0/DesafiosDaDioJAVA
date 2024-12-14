const prompt = require('prompt-sync')();


function taboada(){
    const numero = prompt('Digite um numero : ')
    for(let i = 1; i <+ 10 ; i++){
        let valor = 0
        valor = numero*i
        console.log(`${numero}X${i}=${valor}`)
    }
}
taboada()
