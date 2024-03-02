function calcularImposto(renda) {
	if (renda <= 1000) {
		return renda * 0.1;
	} else {
		return renda * 0.2;
	}
}

module.exports = calcularImposto;
