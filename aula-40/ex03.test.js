// Usando Jest
const ehPar = require("./ex03");

test("deve retornar true para números pares", () => {
	const resultado = ehPar(4);
	expect(resultado).toBe(true);
});
