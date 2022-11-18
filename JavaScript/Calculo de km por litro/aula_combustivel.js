
/*
Faça um programa para calcular o valor gasto de combustivel em uma viagem.

São 3 variáveis:

1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem.

Imprimindo no console, o valor que será gasto de combustível para realizar esta viagem.

*/

var precoCombustivel = 5.95; //Considerado que o valor não mudará
var gastoPorKM = 12.5;
var distanciaEmKm = 20;

var valorfinal = ((distanciaEmKm / gastoPorKM) * precoCombustivel)

console.log("O valor gasto da viagem é de R$ " + valorfinal.toFixed(2))