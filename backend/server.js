import fastify from "fastify";
import "dotenv/config";

const server = fastify();

server.get('/', (req, res) => {
    res.send("Hello World!");
});

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