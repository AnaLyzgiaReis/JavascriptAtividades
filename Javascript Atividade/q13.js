let distancia = Number(prompt("Digite a distância da viagem (km):"))
let velocidade = Number(prompt("Digite a velocidade média da viagem (km/h):"))
let precoCombustivel = Number(prompt("Digite o preço do litro de combustível:"))
let consumo = Number(prompt("Digite o consumo do carro (km por litro):"))

let tempo = distancia / velocidade
let litros = distancia / consumo
let custo = litros * precoCombustivel

console.log("Tempo de viagem (h): " + tempo)
console.log("Litros consumidos: " + litros)
console.log("Custo estimado da viagem: R$ " + custo)