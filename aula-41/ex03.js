function dividir(a, b) {
	if (b === 0) {
		throw new Error("Divisão por zero");
	}
	return a / b;
}

module.exports = dividir;
