const preçoG = 5.70;
const preçoE = 3.80;
const kmporLE = 20;
const kmporLG = 30;
const trajetoKM = 120;

const carro = "Gasolina"

 var porKMG = preçoG / kmporLG
 var porKME = preçoE / kmporLE

 

 if(carro === "Gasolina"){
    porKMG = porKMG*trajetoKM
    console.log(`Será necessário abastecer $${porKMG} de gasolina`)
 }else{
    porKME = porKME*trajetoKM
    console.log(`Será nescessário abastecer $${porKME} de etanol`)
 }


