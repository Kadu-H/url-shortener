import fastify from "fastify";
import urlRoutes from "./src/routes/urlroutes.js";

import "dotenv/config";

const server = fastify();

server.register(urlRoutes);

function startServer() {
    server.listen({ port: process.env.PORT, host: '0.0.0.0' }, (err, address) => {
        if (err) {
            server.log.error(err);
            process.exit(1);
        }
        console.log(`Servidor rodando em: ${address}`);
    });
}
startServer();