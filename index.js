const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const server = express();
const Actions = require("./Actions/Actions");
const Projects = require("./Projects/Projects");
const port = 5000;

server.use(morgan)
server.use(helmet())
server.use(cors())

server.use("/actions",Actions);
server.use("/projects",Projects);

server.listen(port,() => console.log(`The server is listening on port ${port}`))



