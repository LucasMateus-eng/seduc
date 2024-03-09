// Usando callbacks para lidar com operações assíncronas

const fs = require("fs");

function readFile(path, callback) {
	fs.readFile(path, "utf-8", callback);
}

readFile("file.txt", (err, data) => {
	if (err) {
		console.error(err);
	} else {
		console.log(data);
	}
});
