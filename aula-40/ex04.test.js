// Usando Jest
const calcularImposto = require("./ex04");

test("deve calcular o imposto para renda menor que 1000", () => {
	const imposto = calcularImposto(800);
	expect(imposto).toBe(80);
});

test("deve calcular o imposto para renda maior que 1000", () => {
	const imposto = calcularImposto(1500);
	expect(imposto).toBe(300);
});
