let produto = {
  nome: prompt("Digite o nome do produto:"),
  preco: Number(prompt("Digite o preço do produto:")),
  emEstoque: prompt("O produto está em estoque? (sim/não)") === "sim"
}

if (produto.emEstoque) {
  console.log("Produto disponível")
} else {
  console.log("Produto indisponível")
}
