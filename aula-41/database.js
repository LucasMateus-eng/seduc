function consultandoUsuarioNoBancoDeDados(userId) {
	console.log(`Usuário encontrado ${userId}`);
	const user = { userId: userId, name: "usuário fictício" };
	return user;
}

module.exports = { consultandoUsuarioNoBancoDeDados };
