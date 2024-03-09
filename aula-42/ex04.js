// Usando .then() e .catch() para lidar com operações assíncronas

function buscarUsuario(id) {
	return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
		.then((response) => response.json())
		.then((post) => {
			console.log(`Título do post : ${post.title}`);
		})
		.catch((err) => {
			console.error(`Erro ao buscar post: ${err.message}`);
		});
}

buscarUsuario(1);
