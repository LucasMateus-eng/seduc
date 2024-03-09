// Selecionando o botão por classe
const botao = document.querySelector(".botao");

// Adicionando um evento de clique ao botão
botao.addEventListener("click", () => {
	alert("O botão foi clicado!");
});

// Selecionando todas as imagens
const imagens = document.querySelectorAll("img");

// Percorrendo as imagens e adicionando um evento de clique a cada uma
for (const imagem of imagens) {
	imagem.addEventListener("click", () => {
		alert("A imagem foi clicada!");
	});
}

// Selecionando o primeiro parágrafo dentro do container
const paragrafo = document.querySelector(".container p");

// Alterando a cor do parágrafo
paragrafo.style.color = "blue";

// Selecionando o elemento pai do elemento "elemento"
const paiDoElemento = document.querySelector(".elemento").parentNode;

// Adicionando uma borda ao elemento pai
paiDoElemento.style.border = "1px solid red";

// Selecionando todos os links do menu
const linksDoMenu = document.querySelectorAll(".menu a");

// Percorrendo os links e adicionando um evento de clique a cada um
for (const link of linksDoMenu) {
	link.addEventListener("click", (event) => {
		event.preventDefault();
		alert("O link foi clicado!");
	});
}

// Selecionando todos os elementos pares da lista
const elementosParesDaLista = document.querySelectorAll(
	".lista li:nth-child(2n)"
);

// Adicionando uma classe a cada elemento par da lista
for (const elemento of elementosParesDaLista) {
	elemento.classList.add("par");
}
