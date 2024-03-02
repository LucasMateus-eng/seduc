// Usando Jest
const calcularArea = require("./ex02");

test("deve calcular a área de um retângulo", () => {
	const resultado = calcularArea(5, 10);
	expect(resultado).toBe(50);
});
