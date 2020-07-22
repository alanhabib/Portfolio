const fs = require("fs");
const path = require("path");

let tableName;

try {
	tableName = process.argv.find((arg) => arg.includes("--tableName=")).split("=")[1]
} catch (e) {
	return console.error("--tableName parameter not find. Please specify a table name");
}

const fileName = new Date().getTime() + `_${tableName}.sql`;

fs.writeFile(path.resolve(__dirname, `../migrations/${fileName}`), "", (err) => {
	err && console.error(err);
	console.log("Created new migration file in migrations folder");
});
