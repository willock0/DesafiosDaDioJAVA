

const prompt = require('prompt-sync')();
const state = {
    value: {
        ranking: 0
    }
}


/*Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante*/


function NivelDeHeroi() {
    let MeuHeroi = prompt('Digite o nome do herói:');
    let exp = parseInt(prompt('Quantos pontos ele tem de experiência?')); 
    console.log(`Então o seu herói ${MeuHeroi} tem ${exp} de experiência!?`); 
        if(exp < 1000 ){
            state.value.ranking = 'Ferro'
        }else if(exp < 2000){
            state.value.ranking = 'Bronze'
        }else if(exp < 3000){
            state.value.ranking = 'Prata'
        }else if(exp < 4000){
            state.value.ranking = 'Ouro'
        }else if(exp < 5000){
            state.value.ranking = 'Diamante'
        }else if(exp > 6000){
            state.value.ranking = 'Allmight'
        }
        console.log(`Então ${MeuHeroi} é ranking ${state.value.ranking}`)
}

function init() {
    console.log("Rodando o projeto ...");
    NivelDeHeroi();
}

init();
