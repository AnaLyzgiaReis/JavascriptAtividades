let filme = {
  nome: prompt("Digite o nome do filme:"),
  classificacao: Number(prompt("Digite a classificação indicativa (idade mínima):"))
}

console.log("Filme: " + filme.nome)
console.log("Classificação: " + filme.classificacao + " anos")

if (filme.classificacao < 12) {
  console.log("Faixa etária: Livre")
} else if (filme.classificacao < 16) {
  console.log("Faixa etária: 12+")
} else if (filme.classificacao < 18) {
  console.log("Faixa etária: 16+")
} else {
  console.log("Faixa etária: 18+")
}
