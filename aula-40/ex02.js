function ehPar(number) {
	if (number < 0) throw new Error("Número deve ser positivo");
	if (typeof number !== "number") throw new Error("Entrada com tipo inválido");
	return number % 2 === 0;
}

module.exports = ehPar;
