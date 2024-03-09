const database = require("./database");

function consultandoUsuario(userId) {
	const user = database.consultandoUsuarioNoBancoDeDados(userId);
	return user;
}

module.exports = { consultandoUsuario };
