// Usando promises para lidar com operações assíncronas:

const fs = require("fs");

function readFile(path) {
	return new Promise((resolve, reject) => {
		fs.readFile(path, "utf-8", (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
}

readFile("file.txt")
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.error(err);
	});
