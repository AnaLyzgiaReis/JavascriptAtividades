let pessoa = {
  nome: prompt("Digite o nome da pessoa:"),
  peso: Number(prompt("Digite o peso:")),
  altura: Number(prompt("Digite a altura (m):")),
  temperatura: Number(prompt("Digite a temperatura corporal:"))
}

if (pessoa.temperatura >= 37.5) {
  console.log(pessoa.nome + " está com febre!")
} else {
  console.log(pessoa.nome + " não está com febre.")
}
