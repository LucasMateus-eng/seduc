// Usando Jest
const dividir = require("./ex03");

test("deve lançar uma exceção para divisão por zero", () => {
	expect(() => dividir(10, 0)).toThrowError("Divisão por zero");
});
