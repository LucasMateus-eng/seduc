// Adicionando e removendo propriedades de um objeto

let pessoa = {
	nome: "Fulano",
	idade: 30,
	cidade: "São Paulo",
};

pessoa.profissao = "Desenvolvedor"; // Adicionando propriedade

console.log(pessoa);

delete pessoa.profissao; // Removendo propriedade

console.log(pessoa);
