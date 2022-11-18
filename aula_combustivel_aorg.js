// Exercício para calcular o valor do gasto de um carro, diferenciando se ele é a gasolina, etanol ou a gás.

var precoEtanol = 5.79; //Variável com o preço do etanol
var precoGasolina = 6.66; //Variável com o preço da gasolina
var precoGas = 4.50; //Variável com o preço do gás natural
var gastoPorKM = 10; //Variável com o gasto médio do carro (padronizado, como se fosse o mesmo gasto nos diversos combustíveis)
var distanciaEmKm = 100; //Distância em Km
var tipoCombustivel = 'Etanol'; //Escolha de qual combustível

var litrosConsumidos = distanciaEmKm / gastoPorKM; //Fórmula para descobrir qual é o gasto total de combustível

if (tipoCombustivel === 'Etanol') {
    var valorFinal = litrosConsumidos * precoEtanol;
    console.log("O valor gasto da viagem é de R$ " + valorFinal.toFixed(2))
    //Cálculo do gasto, se o carro for movido a Etanol

} else if (tipoCombustivel === 'Gas') {
    var valorFinal = litrosConsumidos * precoGas;
    console.log("O valor gasto da viagem é de R$ " + valorFinal.toFixed(2))
    //Cálculo do gasto, se o carro for movido a Etanol

} else {
    var valorFinal = litrosConsumidos * precoGasolina;
    console.log("O valor gasto da viagem é de R$ " + valorFinal.toFixed(2))
    //Cálculo do gasto, se o carro for movido a Etanol
}


