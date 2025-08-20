import fastify from "fastify";
import fastifyCors from "@fastify/cors";

import urlRoutes from "./src/routes/urlroutes.js";
import redis from "./src/redis/redis.js";

import "dotenv/config";

const server = fastify();

server.register(fastifyCors);
server.register(urlRoutes);

async function startServer() {
    try {
        await redis.connect();

        server.listen({ port: process.env.PORT, host: '0.0.0.0' }, (err, address) => {
            if (err) {
                server.log.error(err);
                process.exit(1);
            }
            console.log(`Servidor rodando em: ${address}`);
        });
    } catch (error) {
        console.error(`Erro ao conectar com o redis: ${error}`);
        process.exit(1);
    }
}
startServer();
