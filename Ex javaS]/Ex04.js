



class carro {
    marca;
    cor;
    kmPorLitro;
    constructor(marca,cor,kmPorLitro){
        this.marca = marca
        this.cor = cor
        this.kmPorLitro = kmPorLitro
    }
}

const palio = new carro('Fiat','vermelho',30)

const trajeto = 240
const combustivel = 5.70

function calculandoTrajeto(carro){
    let valor = (combustivel / carro.kmPorLitro)*trajeto

    console.log(`Para andar o trajéto de ${trajeto}KM com o ${carro.marca} será necessario gastar $${parseInt(valor)}`)
}

calculandoTrajeto(palio)
