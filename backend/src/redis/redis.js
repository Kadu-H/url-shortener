import { createClient } from 'redis';
import "dotenv/config"

const redis = createClient({
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
});

export default redis;