let operacao = prompt("Qual tipo de operação deseja realizar? As opções são: soma, multiplicação, subtração ou divisão.");
let v1 = Number(prompt("Digite o primeiro valor:"));
let v2 = Number(prompt("Digite o segundo valor:"));

if (operacao == "soma") {
    alert("O resultado da soma é: " + (v1 + v2));
} else if (operacao == "multi") {
    alert("O resultado da multiplicação é: " + (v1 * v2));
} else if (operacao == "divisao") {
    if (v1 == 0 || v2 == 0) {
        alert("Não é possível realizar divisão por zero.");
    } else {
        alert("O resultado da divisão é: " + (v1 / v2));
    }
} else if (operacao == "sub") {
    alert("O resultado da subtração é: " + (v1 - v2));
}
