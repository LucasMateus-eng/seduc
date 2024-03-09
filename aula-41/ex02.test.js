// Usando Jest
const ehPar = require("./ex02");

describe("ehPar", () => {
	test("returns true if number is even", () => {
		expect(ehPar(2)).toBe(true);
	});

	test("returns false if number is odd", () => {
		expect(ehPar(3)).toBe(false);
	});

	test("throws an error if number is negative", () => {
		expect(() => ehPar(-1)).toThrow();
	});

	test("throws an error if number is not a number", () => {
		expect(() => ehPar("1")).toThrow();
	});
});
