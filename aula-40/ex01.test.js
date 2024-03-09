// Usando Jest
const somar = require("./ex01");

test("deve somar dois números", () => {
	const resultado = somar(1, 2);
	expect(resultado).toBe(3);
});
