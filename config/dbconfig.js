require("dotenv").config();

let dbName = process.env.DB_NAME;

let dbUrl = `${process.env.DB_URL}/${process.env.DB_NAME}`;

module.exports = { dbName, dbUrl };
