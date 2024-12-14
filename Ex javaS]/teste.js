const prompt = require('prompt-sync')(); // Importa prompt-sync

function NivelDeHeroi() {
    let MeuHeroi = prompt('Digite o nome do herói: ');
    let Xp = parseInt(prompt('Quantos pontos ele tem de experiência? ')); // Usa parseInt para converter em número
    console.log(`Então o seu herói ${MeuHeroi} tem ${Xp} de experiência!?`);
}

function init() {
    console.log("Rodando o projeto ...");
    NivelDeHeroi();
}

init();
