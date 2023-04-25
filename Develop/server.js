const express = require('express');
const fs = require('fs');

const PORT = 3001;

const app = express();

function getDB() {
	let file = JSON.parse(fs.open('./db.json'));
	return file;
}
function addDB(item) {
	let file = JSON.parse(fs.open('./db.json'));
	file.push(item);
	fs.writeFile(JSON.stringify(file));
	return;
}

app.get('/api/notes', (req, res) => {
	res.json(`${req.method} request received`);
	console.info(`${req.method} request received`);
});

app.post('/api/notes', (req, res) => {
	res.json(`${req.method} request received`);
	console.info(`${req.method} request received`);
});

app.listen(PORT, () =>
	console.log(`Express server listening on port ${PORT}!`)
);
