// Objetos literais e construtores

// Objeto literal
let pessoa1 = {
	nome: "Fulano",
	idade: 30,
};

// Construtor
function Pessoa(nome, idade) {
	this.nome = nome;
	this.idade = idade;
}

let pessoa2 = new Pessoa("Beltrano", 25);

console.log(pessoa1);
console.log(pessoa2);
