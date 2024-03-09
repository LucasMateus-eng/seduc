// Usando async/await para lidar com operações assíncronas:

const fs = require("fs");

async function readFile(path) {
	const data = await fs.promises.readFile(path, "utf-8");
	console.log(data);
}

readFile("file.txt");
