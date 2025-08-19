let f1 = {
    nome1: prompt("Digite o nome do primeiro filme:"),
    ano1: Number(prompt("Digite o ano de lançamento:")),
    nota1: Number(prompt("Digite a nota IMDb:")),
    genero1: prompt("Digite o gênero do filme:")
};

let f2 = {
    nome2: prompt("Digite o nome do segundo filme:"),
    ano2: Number(prompt("Digite o ano de lançamento:")),
    nota2: Number(prompt("Digite a nota IMDb:")),
    genero2: prompt("Digite o gênero do filme:")
};

alert("Dados do primeiro filme:\nNome: " + f1.nome1 + "\nAno de lançamento: " + f1.ano1 + "\nNota IMDb: " + f1.nota1 + "\nGênero: " + f1.genero1 +
      "\n\nDados do segundo filme:\nNome: " + f2.nome2 + "\nAno de lançamento: " + f2.ano2 + "\nNota IMDb: " + f2.nota2 + "\nGênero: " + f2.genero2);

if (f1.nota1 > f2.nota2) {
    alert("O primeiro filme possui a melhor nota no IMDb.");
} else {
    alert("O segundo filme possui a melhor nota no IMDb.");
}
