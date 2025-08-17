import { createClient } from 'redis';

const redis = createClient({
    socket: {
        host: 'redis',
        port: 6379
    }
});

export default redis;