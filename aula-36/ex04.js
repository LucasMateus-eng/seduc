// terando sobre um objeto

let pessoa = {
	nome: "Fulano",
	idade: 30,
	cidade: "São Paulo",
};

for (let propriedade in pessoa) {
	console.log(`${propriedade}: ${pessoa[propriedade]}`);
}
