
/*
Faça um programa para calcular o valor gasto de combustivel em uma viagem.

São 3 variáveis:

1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem.

Imprimindo no console, o valor que será gasto de combustível para realizar esta viagem.

*/

var precoDoCombustivel = 5.95;
var gastoPorKM = 12.5;
var distancia = 20;

var valorfinal = ((distancia / gastoPorKM) * precoDoCombustivel)

console.log("O valor gasto da viagem é de R$" + valorfinal)