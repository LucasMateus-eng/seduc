// Usando Jest
const usuario = require("./ex04");
const bancoDeDados = require("./database");

jest.mock("./database");

describe("consultandoUsuario", () => {
	test("deve retornar o usuário com o userId fornecido", () => {
		const usuarioId = "123";
		const usuarioObj = { id: usuarioId, name: "John" };

		bancoDeDados.consultandoUsuarioNoBancoDeDados.mockReturnValue(usuarioObj);

		const result = usuario.consultandoUsuario(usuarioId);

		expect(result).toBe(usuarioObj);
	});
});
