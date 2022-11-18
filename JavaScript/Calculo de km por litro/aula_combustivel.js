
// Programa em JS para calcular o valor gasto de combustivel em uma viagem.


var precoCombustivel = 5.95; //Considerado que o valor não mudará
var gastoPorKM = 12.5;
var distanciaEmKm = 20;

var valorfinal = ((distanciaEmKm / gastoPorKM) * precoCombustivel)

console.log("O valor gasto da viagem é de R$ " + valorfinal.toFixed(2))
