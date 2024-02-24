// Manipulação do DOM

// Selecionando um elemento
let elemento = document.getElementById("meu-elemento");

// Alterando o conteúdo
elemento.innerHTML = "Novo conteúdo";

// Adicionando um evento
elemento.addEventListener("click", function () {
	console.log("Elemento clicado!");
});
