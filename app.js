const http = require("http");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

const port = parseInt(process.env.PORT, 10) || 8081;
const host = process.env.PSQL_HOST;

const app = express();
app.set('trust proxy', '127.0.0.1')
const server = http.createServer(app);

app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



require("./server/routes ")(app);
app.get("*", (req, res) =>
    res.status(200).send({
        message: "welcome!"
    })
);


app.set("port", port);
app.set("host", host)
server.listen(port);

module.exports = app;