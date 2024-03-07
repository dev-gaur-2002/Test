const express = require("express");
const dotenv = require("dotenv").config();

const server = express();

server.get("/", (req, res) => {
	res.json({
		message: "this is home screen",
	});
});

const port = process.env.PORT;
server.listen(port, () => {
	console.log(`server is up and running at port:${port}`);
});
